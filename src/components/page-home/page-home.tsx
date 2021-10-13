import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      <div class="page-home">
        <ul>
          <li><stencil-route-link url="/tools/explore">Explore Materials (Random)</stencil-route-link></li>
        </ul>
        <stencil-router-redirect url="/tools/explore"/>
      </div>
    );
  }
}
