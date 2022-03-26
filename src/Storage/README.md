# Storage

## 参照

MDN : localStorage / sessionStorage  
https://developer.mozilla.org/ja/docs/Web/API/Window/localStorage  


## 概要

ブラウザ内に手軽にデータを保存できるKeyValueタイプのストレージです。保存期間に制限はありませんが、最大保存容量が少ないため少量のデータ保存に用います。また、保存したデータは同一オリジン内でのみ共有可能になります。Storageは保存期間に制限のないLocalStorageと、タブを閉じると削除されるSessionStorageの2種類を選択できます。