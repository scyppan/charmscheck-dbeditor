function makeiframe(key) {
    const iframe = document.createElement('iframe');
    iframe.classList.add('form-iframe');
    iframe.src = 'about:blank';
    iframe.onload = function() {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      doc.open();
      doc.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <base href="https://charmscheck.com/">
            <style>
              /* This CSS applies only to the iframe's document */
              body {
                text-align: left;
                margin: 0;
                padding: 0;
              }

              .frm_forms.frm_style_formidable-style.with_frm_style  {
                margin: 7px !important;
                
              }
            </style>
          </head>
          <body>
            <script src="frm_embed/${key}" defer></script>
          </body>
        </html>
      `);
      doc.close();
    };
    return iframe;
  }
  