# レンダリング種類
## 1.CSR(Client Side Rendering)
https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering

初回アクセスのみサーバーからデータを取得し、それ以降の表示(動的表示含む)はクライアント完結で行う方法。

クライアント完結でページを表示するため、全ての読み込みが完了するまでは、ページが表示されない。

2回目以降は、一部(変更部分？)のみレンダリングされ表示される。

サーバーからデータを要求する必要はないので、高速。

## 2.静的サイト生成 SSG(Static Site Generation)
https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation

> ページで静的生成を使用する場合、ページの HTML はビルド時に生成されます。つまり、運用環境では、 を実行するとページ HTML が生成されますnext build。この HTML はリクエストごとに再利用されます。 CDN によってキャッシュできます。

要は、静的ページのレンダリングに最適。ってことかな。

データの取得は、ビルド時のみ行われる。


## 3.SSR(Server Side Rendering)
https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering

アクセスごとにHTMLを生成する。

ページへのアクセスがあると、サーバーによって`getServerSideProps`関数を呼び出し、サーバはデータを返却し最新のデータを表示することができる。

アクセスごとにコンテンツが動的に変更できるため、SEOに最適だが、毎回サーバー側で処理されるため、低レイテンシになる可能性がある。

## 4.ISR(Incremental Static Regeneration)
https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration

SSGとSSRのいいとこ取りした感じ。

ビルド時HTMLを生成し(SSGと同様)、アクセスに応じてバックグラウンドでサーバー側からデータを取得し、一部を更新していく方法。

SSRとは異なり、サーバーのレスポンスを待つ必要がないためSSG同様高レイテンシを保ちつつ、データも更新することができる。




