import React from "react";
import { render } from "react-dom";

import { createInertiaApp } from "@inertiajs/inertia-react";
import { MantineProvider } from "@mantine/core";

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(
      <React.StrictMode>
        <MantineProvider
          theme={{
            fontFamily: "BrownPro, sans-serif",
            fontSizes: [12, 14, 16, 20, 24],
            headings: {
              fontFamily: "BrownPro, sans-serif",
              fontWeight: "300",
              sizes: {
                h1: { fontSize: 24 },
                h2: { fontSize: 20 },
                h3: { fontSize: 16 },
                h4: { fontSize: 14 },
                h5: { fontSize: 12 },
              },
            },
            spacing: {
              xs: 2,
              xl: 20,
            },
            colors: {
              "pf-blue": [
                "#F6F6FB",
                "#D4D4F1",
                "#AEAEED",
                "#8585F1",
                "#5555FF", //this is the main color
                "#4747EB",
                "#3F3FD5",
                "#3C3CBB",
                "#42429D",
                "#434385",
              ],
            },
            primaryColor: "pf-blue",
          }}
        >
          <App {...props} />
        </MantineProvider>
      </React.StrictMode>,
      el
    );
  },
});
