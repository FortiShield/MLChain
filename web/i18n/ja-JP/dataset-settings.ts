const translation = {
  title: 'ナレッジの設定',
  desc: 'ここではナレッジのプロパティと動作方法を変更できます。',
  form: {
    name: 'ナレッジ名',
    namePlaceholder: 'ナレッジ名を入力してください',
    nameError: '名前は空にできません',
    desc: 'ナレッジの説明',
    descInfo: 'ナレッジの内容を概説するための明確なテキストの説明を書いてください。この説明は、複数のナレッジから推論を選択する際の基準として使用されます。',
    descPlaceholder: 'このナレッジに含まれる内容を説明してください。詳細な説明は、AIがナレッジの内容にタイムリーにアクセスできるようにします。空の場合、Difyはデフォルトのヒット戦略を使用します。',
    descWrite: '良いナレッジの説明の書き方を学ぶ。',
    permissions: '権限',
    permissionsOnlyMe: '自分のみ',
    permissionsAllMember: 'すべてのチームメンバー',
    indexMethod: 'インデックス方法',
    indexMethodHighQuality: '高品質',
    indexMethodHighQualityTip: 'ユーザーがクエリを実行する際により高い精度を提供するために、Embeddingモデルを呼び出して処理を行う。',
    indexMethodEconomy: '経済的',
    indexMethodEconomyTip: 'オフラインのベクトルエンジン、キーワードインデックスなどを使用して精度を低下させることなく、トークンを消費せずに処理します。',
    embeddingModel: '埋め込みモデル',
    embeddingModelTip: '埋め込みモデルを変更するには、',
    embeddingModelTipLink: '設定',
    retrievalSetting: {
      title: '検索設定',
      learnMore: '詳細を学ぶ',
      description: ' 検索方法についての詳細',
      longDescription: ' 検索方法についての詳細については、いつでもナレッジの設定で変更できます。',
    },
    save: '保存',
  },
}

export default translation
