import { Component, h, State } from '@stencil/core';


@Component({
  tag: 'tool-explore',
  styleUrl: 'tool-explore.css',
  shadow: false,
})
export class ToolExplore {

  @State() material: object = null;
  @State() database: Array<object> = [];
  
  componentWillLoad() {
    fetch("assets/index.json").then((response) => {
      response.json().then((data) => {
        this.database = data;
        this.doSelectRandomly();
      });
    });
  }

  doSelectRandomly() {
    const mat = this.database[Math.round(Math.random()*this.database.length)];
    this.material = mat;
  }

  doVisitWebsite() {
    if (this.material != null) {
      window.open(this.material['url'], '_blank');
    }
  }

  renderMaterial() {
    if (this.material != null) {
      const url_jxl = "https://texture.design/tools/cache/" + this.material['uuid'] + ".jxl";
      const url_webp = "https://texture.design/tools/cache/" + this.material['uuid'] + ".webp";
      return (
        <picture class="preview">
          <source srcSet={url_jxl} type="image/jxl" />
          <source srcSet={url_webp} type="image/webp" />
          <img src="" />
        </picture>
      );
    }
  }

  render() {
    return (
      <div class="tool-explore">
        <header>
          <stencil-route-link url="/">
            <i class="fas fa-paint-roller"></i>
          </stencil-route-link>
          <h1>Explore</h1>
          <stencil-route-title pageTitle="Explore" />
        </header>

        <main>
          {this.renderMaterial()}

          <button id="btn-rand" onClick={_ => this.doSelectRandomly()} title="Select next one randomly!"><i class="fas fa-dice"></i></button>
          <button id="btn-link" onClick={_ => this.doVisitWebsite()} title="Show original website."><i class="fas fa-external-link-alt"></i></button>
        </main>
      </div>
    );
  }
}
