'use strict';

import { main, section, h1, p } from '@emphori/fui/html';

;(async () => {
  const app = main
    .add(section
      .add(h1.text('twitch panel generator'))
      .add(p.text('build your own fancy panel header'))
    );

  document.querySelector('body').appendChild(app());
})();
