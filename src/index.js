import './product.css';

export default class Product {
  static get toolbox() {
    return {
      title: 'Product',
      icon: '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 437.053 437.053" style="enable-background:new 0 0 437.053 437.053;" xml:space="preserve"><path style="fill:#010002;" d="M416.269,291.633l-180.723-113.19v-8.502c0-5.023,2.577-9.071,8.112-12.721 c0.683-0.455,1.488-0.943,2.382-1.488c8.779-5.381,27.052-16.574,27.052-41.805c0-26.207-21.598-46.317-42.488-50.625 c-21.996-4.568-41.943,0.788-54.933,15.046c-11.843,12.957-15.168,23.752-15.867,41.277c-0.057,1.268-0.089,3.999-0.122,6.665 c-0.033,3.682,7.234,6.674,16.208,6.674h3.251c8.974,0,16.265-2.975,16.282-6.657c0.008-3.04,0.033-6.096,0.057-6.674 c0.496-12.087,3.747-19.2,16.086-21.695c7.673-1.544,15.956,0.602,20.809,5.357c2.203,2.146,3.365,5.869,3.04,9.714 c-0.211,2.561-1.309,7.356-6.145,10.689l-15.485,10.543c-9.876,6.324-14.079,13.892-14.079,25.296v18.931L20.806,291.235 C-5.71,307.589-0.223,335.479,2.094,343.64c2.122,7.438,11.77,31.701,46.902,31.701H390.29c24.825,0,40.529-16.143,45.105-32.157 C440.134,326.44,434.997,302.672,416.269,291.633z M397.906,331.024c-0.853,2.991-3.625,6.218-8.129,6.218 c-0.008,0-0.008,0-0.008,0H48.565c-4.731-0.016-7.397-3.121-8.242-5.771c-1.081-3.406,0.317-6.885,3.536-9.169l174.878-109.459 l175.845,109.923C398.931,325.489,398.354,329.447,397.906,331.024z"/></svg>        '
    };
  }

  constructor({ data }) {
    this.data = data;
  }

  render() {
    let el = document.createElement('input');
    el.setAttribute("id", "product_input");
    el.value = this.data && this.data.text ? this.data.text : "";

    let helperText = document.createElement("label");
    helperText.setAttribute("for", "product_input");
    helperText.classList.add("helper_text");
    helperText.innerHTML = "Vložte prefix z URL produktu např. 07014P-W. Pokud chcete i zobrazit i konkrétní barvu, zadejte kód produktu ve formátu 07014P-W-MxB.<br/><span class=\"bold\">Pro zadání více produktu použijte středník (;) jako oddělovač.</span>";

    let wrapper = document.createElement('div');
    wrapper.classList.add("product_input_wrapper");
    wrapper.appendChild(el);
    wrapper.appendChild(helperText);

    return wrapper;
  }

  save(blockContent) {
    const input = blockContent.querySelector('input');
    return {
      text: input.value
    }
  }
}