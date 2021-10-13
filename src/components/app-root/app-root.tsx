import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {

  render() {
    return (
      <div>
        <stencil-router title-suffix=" - texture • design">
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/tools/explore" component="tool-explore"></stencil-route>
            <stencil-route component="page-home"></stencil-route>
          </stencil-route-switch>
        </stencil-router>
      </div>
    );
  }
}
