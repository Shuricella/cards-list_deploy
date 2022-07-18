export default class Card {
  constructor (someProduct) {
  this.state = someProduct;
  this.myRender ();
  }

  getTemplate () {
    const result = `
      <div class="blok-rama">

        <div class="blok-img"><img class="img-dimen" src="${this.state.images [0]}"></div>

        <div class="blok-zv-cn">

          <div class="blok-zvezda">
            <div class="corect1">${this.state.rating}</div>
            <div class="corect1"><i class="bi bi-star"></i></div>
          </div>

          <div class="blok-cena">${this.state.price}</div>

        </div>

        <div class="blok-naz">
        <div class="corect3">${this.state.title}</div>
        </div>

        <div class="typ">
        <div class="corect4">${this.state.category}</div>
        </div>

        <div class="blok-add knop">
        <div class="corect5">Add To Cart</div>
        </div>

      </div>
    `;
    return result;
    }

  update (data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate ();
  }

  myRender () {
    const wrapper = document.createElement ('div');
    wrapper.innerHTML = this.getTemplate ();
    this.element = wrapper.firstElementChild;
  }

}
