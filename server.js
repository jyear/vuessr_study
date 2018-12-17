const express = require("express")();
const Vue = require("vue");
const renderer = require("vue-server-renderer").createRenderer();

const app = new Vue({
    template: `<div>
                <input type="file" onchange='getFile(event)' />
            </div>`
});

express.get("*", (req, res) => {
    renderer.renderToString(app, (err, html) => {
        if (err) {
            return res.state(500).end("运行时错误");
        }
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Vue2.0 SSR渲染页面</title>
                </head>
                    <script>
                        function getFile(file){
                            console.log(file.target.files[0]);
                        }
                    </script>
                <body>
                    ${html}
                    
                </body>
            </html>
        `);
    });
});

express.listen(8899);
