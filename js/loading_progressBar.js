// ProgressBar.js を使って、ローディングバーを作成する設定
var bar = new ProgressBar.Line(loadingBar, {
  // アニメーションの設定
  easing: "easeInOut", // アニメーションの動きをスムーズにする種類
  duration: 1000, // アニメーションの所要時間（ミリ秒単位）

  // ローディングバーのデザイン
  strokeWidth: 0.2, // ローディングバーの線の太さ
  color: "#555", // ローディングバーの色
  trailColor: "#bbb", // ローディングバーの背景線の色

  // ローディングバー中央に表示するテキストの設定
  text: {
    style: {
      position: "absolute", // テキストの位置を絶対位置で指定
      left: "50%", // 横方向の中央に配置
      top: "50%", // 縦方向の中央に配置
      padding: "0", // 余白をゼロにする
      margin: "-30px 0 0 0", // テキストを微調整して正しい位置に表示
      transform: "translate(-50%,-50%)", // 中央揃えの微調整
      "font-size": "1rem", // フォントサイズ
      color: "#fff", // テキストの色
    },
  },

  // アニメーション中に実行する処理
  step: function (state, bar) {
    // ローディングバーに進捗状況（%）を表示
    bar.setText(Math.round(bar.value() * 100) + " %"); // 0～100のパーセントを表示
  },
});

// ローディングバーをアニメーションさせる
bar.animate(1.0, function () {
  // アニメーションが終了した後の処理
  $("#loadingBar-container").delay(500).fadeOut(800); // 0.5秒待ってからコンテナをフェードアウト
});