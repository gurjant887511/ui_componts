import { useEffect, useRef } from "react";

export default function Preview({ code }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (!code) return;

    const html = `
      <html>
        <head>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="p-4">
          <div id="root"></div>
          <script type="module">
            import React from "https://esm.sh/react";
            import ReactDOM from "https://esm.sh/react-dom";

            try {
              const Comp = (${code});
              ReactDOM.render(React.createElement(Comp), document.getElementById("root"));
            } catch (e) {
              document.body.innerHTML = '<pre style="color:red">' + e.toString() + '</pre>';
            }
          </script>
        </body>
      </html>
    `;

    iframeRef.current.srcdoc = html;
  }, [code]);

  return (
    <div className="border rounded-lg overflow-hidden">
      <iframe ref={iframeRef} className="w-full h-64 bg-white" />
    </div>
  );
}
