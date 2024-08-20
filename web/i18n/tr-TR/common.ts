const translation = {
  api: {
    success: 'Başarılı',
    actionSuccess: 'İşlem başarılı',
    saved: 'Kaydedildi',
    create: 'Oluşturuldu',
    remove: 'Kaldırıldı',
  },
  operation: {
    create: 'Oluştur',
    confirm: 'Onayla',
    cancel: 'İptal',
    clear: 'Temizle',
    save: 'Kaydet',
    saveAndEnable: 'Kaydet ve Etkinleştir',
    edit: 'Düzenle',
    add: 'Ekle',
    added: 'Eklendi',
    refresh: 'Yeniden Başlat',
    reset: 'Sıfırla',
    search: 'Ara',
    change: 'Değiştir',
    remove: 'Kaldır',
    send: 'Gönder',
    copy: 'Kopyala',
    lineBreak: 'Satır sonu',
    sure: 'Eminim',
    download: 'İndir',
    delete: 'Sil',
    settings: 'Ayarlar',
    setup: 'Kurulum',
    getForFree: 'Ücretsiz edinin',
    reload: 'Yeniden Yükle',
    ok: 'Tamam',
    log: 'log',
    learnMore: 'Daha Fazla Bilgi',
    params: 'Parametreler',
    duplicate: 'Çoğalt',
    rename: 'Yeniden Adlandır',
  },
  errorMsg: {
    fieldRequired: '{{field}} gereklidir',
    urlError: 'URL http:// veya https:// ile başlamalıdır',
  },
  placeholder: {
    input: 'Lütfen girin',
    select: 'Lütfen seçin',
  },
  voice: {
    language: {
      zhHans: 'Chinese',
      zhHant: 'Traditional Chinese',
      enUS: 'English',
      deDE: 'German',
      frFR: 'French',
      esES: 'Spanish',
      itIT: 'Italian',
      thTH: 'Thai.',
      idID: 'Indonesian',
      jaJP: 'Japanese',
      koKR: 'Korean',
      ptBR: 'Portuguese',
      ruRU: 'Russian',
      ukUA: 'Ukrainian',
      viVN: 'Vietnamese',
      plPL: 'Polish',
    },
  },
  unit: {
    char: 'karakter',
  },
  actionMsg: {
    noModification: 'Şu an için değişiklik yok.',
    modifiedSuccessfully: 'Başarıyla değiştirildi',
    modifiedUnsuccessfully: 'Değiştirme başarısız oldu',
    copySuccessfully: 'Başarıyla kopyalandı',
    paySucceeded: 'Ödeme başarılı oldu',
    payCancelled: 'Ödeme iptal edildi',
    generatedSuccessfully: 'Başarıyla oluşturuldu',
    generatedUnsuccessfully: 'Oluşturma başarısız oldu',
  },
  model: {
    params: {
      temperature: 'Sıcaklık',
      temperatureTip:
        'Rastgeleliği kontrol eder: Sıcaklık düştükçe daha az rastgele tamamlamalar gerçekleşir. Sıcaklık sıfıra yaklaştıkça model deterministik ve tekrarlı hale gelir.',
      top_p: 'Top P',
      top_pTip:
        'Çeşitliliği nucleus örnekleme ile kontrol eder: 0.5, tüm olasılık ağırlıklı seçeneklerin yarısının dikkate alındığı anlamına gelir.',
      presence_penalty: 'Varlık cezası',
      presence_penaltyTip:
        'Şimdiye kadar metinde görünüp görünmediğine bağlı olarak yeni tokenları ne kadar cezalandıracağını belirler.\nModelin yeni konular hakkında konuşma olasılığını artırır.',
      frequency_penalty: 'Frekans cezası',
      frequency_penaltyTip:
        'Mevcut metindeki frekanslarına göre yeni tokenları ne kadar cezalandıracağını belirler.\nModelin aynı satırı aynen tekrarlama olasılığını azaltır.',
      max_tokens: 'Maksimum token',
      max_tokensTip:
        'Yanıtın maksimum uzunluğunu token cinsinden sınırlar.\nDaha büyük değerler prompt kelimeleri, sohbet kayıtları ve Bilgiler için bırakılacak alanı sınırlayabilir. \nİki üçün altında ayarlanması önerilir\ngpt-4-1106-preview, gpt-4-vision-preview maksimum token (giriş 128k, çıkış 4k).',
      maxTokenSettingTip: 'Maksimum token ayarınız yüksek, bu da promptlar, sorgular ve veriler için alanı sınırlayabilir. Bu değeri 2/3\'ün altında ayarlamayı düşünün.',
      setToCurrentModelMaxTokenTip: 'Maksimum token, mevcut modelin maksimum token\'ın %80\'ine {maxToken} olarak güncellendi.',
      stop_sequences: 'Stop sıraları',
      stop_sequencesTip: 'API, dört adede kadar sıra belirleyerek daha fazla token üretmeyi durduracaktır. Dönülen metin durdurma sırasını içermez.',
      stop_sequencesPlaceholder: 'Sıra girin ve Tab tuşuna basın',
    },
    tone: {
      Creative: 'Yaratıcı',
      Balanced: 'Dengeli',
      Precise: 'Kesin',
      Custom: 'Özel',
    },
    addMoreModel: 'Daha fazla model eklemek için ayarlara gidin',
  },
  menus: {
    status: 'beta',
    explore: 'Keşfet',
    apps: 'Studio',
    plugins: 'Eklentiler',
    pluginsTips: 'Üçüncü taraf eklentileri entegre edin veya ChatGPT uyumlu AI-Eklentileri oluşturun.',
    datasets: 'Bilgi',
    datasetsTips: 'YAKINDA: Kendi metin verilerinizi içe aktarın veya LLM bağlamını geliştirmek için Webhook aracılığıyla gerçek zamanlı veri yazın.',
    newApp: 'Yeni Uygulama',
    newDataset: 'Bilgi Oluştur',
    tools: 'Araçlar',
  },
  userProfile: {
    settings: 'Ayarlar',
    emailSupport: 'E-posta Desteği',
    workspace: 'Çalışma Alanı',
    createWorkspace: 'Çalışma Alanı Oluştur',
    helpCenter: 'Yardım',
    roadmapAndFeedback: 'Geri Bildirim',
    community: 'Topluluk',
    about: 'Hakkında',
    logout: 'Çıkış Yap',
  },
  settings: {
    accountGroup: 'HESAP',
    workplaceGroup: 'ÇALIŞMA ALANI',
    account: 'Hesabım',
    members: 'Üyeler',
    billing: 'Faturalandırma',
    integrations: 'Entegrasyonlar',
    language: 'Dil',
    provider: 'Model Sağlayıcı',
    dataSource: 'Veri Kaynağı',
    plugin: 'Eklentiler',
    apiBasedExtension: 'API Uzantısı',
  },
  account: {
    avatar: 'Avatar',
    name: 'İsim',
    email: 'E-posta',
    password: 'Şifre',
    passwordTip: 'Geçici giriş kodlarını kullanmak istemiyorsanız kalıcı bir şifre ayarlayabilirsiniz',
    setPassword: 'Şifre Ayarla',
    resetPassword: 'Şifreyi Sıfırla',
    currentPassword: 'Mevcut şifre',
    newPassword: 'Yeni şifre',
    confirmPassword: 'Şifreyi onayla',
    notEqual: 'İki şifre aynı değil.',
    mlChainAccount: 'Mlchain hesabı',
    mlChainAccountTip: 'Mlchain hesabınız ve ilişkili kullanıcı verileri.',
    editName: 'İsmi Düzenle',
    showAppLength: '{{length}} uygulamayı göster',
    delete: 'Hesabı Sil',
    deleteTip: 'Hesabınızı silmek tüm verilerinizi kalıcı olarak siler ve geri alınamaz.',
    deleteConfirmTip: 'Onaylamak için, kayıtlı e-postanızdan şu adrese e-posta gönderin: ',
  },
  members: {
    team: 'Takım',
    invite: 'Ekle',
    name: 'İSİM',
    lastActive: 'SON AKTİF',
    role: 'ROLLER',
    pending: 'Beklemede...',
    owner: 'Sahibi',
    admin: 'Yönetici',
    adminTip: 'Uygulama oluşturabilir ve takım ayarlarını yönetebilir',
    normal: 'Normal',
    normalTip: 'Sadece uygulamaları kullanabilir, uygulama oluşturamaz',
    builder: 'Oluşturucu',
    builderTip: 'Kendi uygulamalarını oluşturup düzenleyebilir',
    editor: 'Editör',
    editorTip: 'Uygulama oluşturabilir ve düzenleyebilir',
    datasetOperator: 'Bilgi Yöneticisi',
    datasetOperatorTip: 'Sadece bilgi tabanını yönetebilir',
    inviteTeamMember: 'Takım Üyesi Ekle',
    inviteTeamMemberTip: 'Giriş yaptıktan sonra takım verilerinize doğrudan erişebilirler.',
    email: 'E-posta',
    emailInvalid: 'Geçersiz E-posta Formatı',
    emailPlaceholder: 'Lütfen e-postaları girin',
    sendInvite: 'Davet Gönder',
    invitedAsRole: '{{role}} kullanıcısı olarak davet edildi',
    invitationSent: 'Davet gönderildi',
    invitationSentTip: 'Davet gönderildi, Mlchain\'ye giriş yaparak takım verilerinize erişebilirler.',
    invitationLink: 'Davet Linki',
    failedinvitationEmails: 'Aşağıdaki kullanıcılar başarıyla davet edilmedi',
    ok: 'Tamam',
    removeFromTeam: 'Takımdan Kaldır',
    removeFromTeamTip: 'Takım erişimi kaldırılacak',
    setAdmin: 'Yönetici olarak ayarla',
    setMember: 'Normal üye olarak ayarla',
    setBuilder: 'Oluşturucu olarak ayarla',
    setEditor: 'Editör olarak ayarla',
    disinvite: 'Davetiyeyi iptal et',
    deleteMember: 'Üyeyi Sil',
    you: '(Siz)',
  },
  integrations: {
    connected: 'Bağlandı',
    google: 'Google',
    googleAccount: 'Google hesabıyla giriş yap',
    github: 'GitHub',
    githubAccount: 'GitHub hesabıyla giriş yap',
    connect: 'Bağlan',
  },
  language: {
    displayLanguage: 'Görüntüleme Dili',
    timezone: 'Zaman Dilimi',
  },
  provider: {
    apiKey: 'API Anahtarı',
    enterYourKey: 'API anahtarınızı buraya girin',
    invalidKey: 'Geçersiz OpenAI API anahtarı',
    validatedError: 'Doğrulama hatası: ',
    validating: 'Anahtar doğrulanıyor...',
    saveFailed: 'API anahtarını kaydetme başarısız oldu',
    apiKeyExceedBill: 'Bu API ANAHTARININ kullanılabilir kotası yok, lütfen okuyun',
    addKey: 'Anahtar Ekle',
    comingSoon: 'Yakında',
    editKey: 'Düzenle',
    invalidApiKey: 'Geçersiz API anahtarı',
    azure: {
      apiBase: 'API Tabanı',
      apiBasePlaceholder: 'Azure OpenAI Endpoint\'inizin API Tabanı URL\'si.',
      apiKey: 'API Anahtarı',
      apiKeyPlaceholder: 'API anahtarınızı buraya girin',
      helpTip: 'Azure OpenAI Service hakkında bilgi edinin',
    },
    openaiHosted: {
      openaiHosted: 'Barındırılan OpenAI',
      onTrial: 'DENEMEDE',
      exhausted: 'KOTA DOLU',
      desc: 'Mlchain tarafından sağlanan OpenAI barındırma hizmeti, GPT-3.5 gibi modelleri kullanmanıza olanak tanır. Deneme kotanız bitmeden önce, diğer model sağlayıcılarını ayarlamanız gerekir.',
      callTimes: 'Çağrı süreleri',
      usedUp: 'Deneme kotası kullanıldı. Kendi Model Sağlayıcınızı ekleyin.',
      useYourModel: 'Şu anda kendi Model Sağlayıcınızı kullanıyorsunuz.',
      close: 'Kapat',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'DENEMEDE',
      exhausted: 'KOTA DOLU',
      desc: 'Güçlü model, karmaşık diyaloglar ve yaratıcı içerik üretiminden ayrıntılı yönlendirmeye kadar geniş bir görev yelpazesi konusunda mükemmeldir.',
      callTimes: 'Çağrı Süreleri',
      usedUp: 'Deneme kotası kullanıldı. Kendi Model Sağlayıcınızı ekleyin.',
      useYourModel: 'Şu anda kendi Model Sağlayıcınızı kullanıyorsunuz.',
      close: 'Kapat',
    },
    anthropic: {
      using: 'Yerleştirme yeteneği,',
      enableTip: 'Anthropic modelini etkinleştirmek için önce OpenAI veya Azure OpenAI hizmetine bağlanmanız gerekir.',
      notEnabled: 'Etkin değil',
      keyFrom: 'API anahtarınızı Anthropic\'ten edinin',
    },
    encrypted: {
      front: 'API ANAHTARINIZ şu kullanılarak şifrelenip saklanacak:',
      back: ' teknolojisi.',
    },
  },
  modelProvider: {
    notConfigured: 'Sistem modeli henüz tam olarak yapılandırılmadı ve bazı işlevler kullanılamayabilir.',
    systemModelSettings: 'Sistem Model Ayarları',
    systemModelSettingsLink: 'Sistem modelini ayarlamak neden gereklidir?',
    selectModel: 'Modelinizi seçin',
    setupModelFirst: 'Lütfen önce modelinizi ayarlayın',
    systemReasoningModel: {
      key: 'Sistem Çıkarım Modeli',
      tip: 'Uygulamalar oluşturmak ve diyalog adı oluşturma ve sonraki soru önerisi gibi özelliklerin otomatikleştirilmesi için kullanılacak varsayılan çıkarım modelini ayarlayın.',
    },
    embeddingModel: {
      key: 'Yerleştirme Modeli',
      tip: 'Bilginin belge yerleştirme işlemi için varsayılan modeli ayarlayın, Bilginin geri alımı ve içe aktarımı için bu Yerleştirme modeli kullanılarak vektörizasyon işlemleri yapılır. Değiştirilmesi, içe aktarılan Bilgilere ve sorulara arasındaki vektör boyutlarının tutarsız olmasına neden olarak geri alım hatasına yol açar. Geri alım hatasını önlemek için önce modeli keyfi olarak değiştirmeyin.',
      required: 'Yerleştirme Modeli gereklidir',
    },
    speechToTextModel: {
      key: 'Konuşmadan Metne Modeli',
      tip: 'Konuşmada konuşmadan metne giriş için varsayılan modeli ayarlayın.',
    },
    ttsModel: {
      key: 'Metinden Konuşmaya Modeli',
      tip: 'Konuşmada metinden konuşmaya giriş için varsayılan modeli ayarlayın.',
    },
    rerankModel: {
      key: 'Yeniden Sıralama Modeli',
      tip: 'Yeniden sıralama modeli, kullanıcı sorgusuyla anlam eşleştirmesine dayalı olarak aday belge listesini yeniden sıralayacak ve anlam sıralama sonuçlarını iyileştirecektir.',
    },
    apiKey: 'API-KEY',
    quota: 'Kota',
    searchModel: 'Model ara',
    noModelFound: '{{model}} için model bulunamadı',
    models: 'Modeller',
    showMoreModelProvider: 'Daha fazla model sağlayıcı göster',
    selector: {
      tip: 'Bu model kaldırıldı. Lütfen bir model ekleyin veya başka bir model seçin.',
      emptyTip: 'Kullanılabilir model yok',
      emptySetting: 'Lütfen ayarlara gidip yapılandırın',
      rerankTip: 'Lütfen Yeniden Sıralama modelini ayarlayın',
    },
    card: {
      quota: 'KOTA',
      onTrial: 'Deneme Sürümünde',
      paid: 'Ücretli',
      quotaExhausted: 'Kota Tükendi',
      callTimes: 'Çağrı Süreleri',
      tokens: 'Tokenler',
      buyQuota: 'Kota Satın Al',
      priorityUse: 'Öncelikli Kullan',
      removeKey: 'API Anahtarını Kaldır',
      tip: 'Öncelikle ücretli kota kullanılacaktır. Deneme kotası, ücretli kota tükendiğinde kullanılacaktır.',
    },
    item: {
      deleteDesc: '{{modelName}} şu anda sistem çıkarım modeli olarak kullanılmaktadır. Kaldırıldıktan sonra bazı işlevler kullanılamayabilir. Lütfen onaylayın.',
      freeQuota: 'ÜCRETSİZ KOTA',
    },
    addApiKey: 'API anahtarınızı ekleyin',
    invalidApiKey: 'Geçersiz API anahtarı',
    encrypted: {
      front: 'API ANAHTARINIZ şu kullanılarak şifrelenip saklanacak:',
      back: ' teknolojisi.',
    },
    freeQuota: {
      howToEarn: 'Nasıl kazanılır',
    },
    addMoreModelProvider: 'DAHA FAZLA MODEL SAĞLAYICI EKLEYİN',
    addModel: 'Model Ekle',
    modelsNum: '{{num}} Model',
    showModels: 'Modelleri Göster',
    showModelsNum: '{{num}} Modeli Göster',
    collapse: 'Daralt',
    config: 'Yapılandır',
    modelAndParameters: 'Model ve Parametreler',
    model: 'Model',
    featureSupported: '{{feature}} desteklenir',
    callTimes: 'Çağrı Süreleri',
    credits: 'Mesaj Kredileri',
    buyQuota: 'Kota Satın Al',
    getFreeTokens: 'Ücretsiz Token Al',
    priorityUsing: 'Öncelikli Kullanım',
    deprecated: 'Kullanım dışı',
    confirmDelete: 'silme onayı?',
    quotaTip: 'Kalan kullanılabilir ücretsiz tokenler',
    loadPresets: 'Hazır Ayarları Yükle',
    parameters: 'PARAMETRELER',
    loadBalancing: 'Yük dengeleme',
    loadBalancingDescription: 'Birden fazla kimlik bilgisi grubu ile baskıyı azaltın.',
    loadBalancingHeadline: 'Yük Dengeleme',
    configLoadBalancing: 'Yük Dengelemeyi Yapılandır',
    modelHasBeenDeprecated: 'Bu model kullanım dışıdır',
    providerManaged: 'Sağlayıcı tarafından yönetilen',
    providerManagedDescription: 'Model sağlayıcı tarafından sağlanan tek bir kimlik bilgisi grubunu kullanın.',
    defaultConfig: 'Varsayılan Yapılandırma',
    apiKeyStatusNormal: 'API Anahtarının durumu normal',
    apiKeyRateLimit: 'Hız sınırına ulaşıldı, {{seconds}} saniye sonra tekrar kullanılabilir',
    addConfig: 'Yapılandırma Ekle',
    editConfig: 'Yapılandırmayı Düzenle',
    loadBalancingLeastKeyWarning: 'Yük dengeleme etkinleştirmek için en az 2 anahtar etkinleştirilmelidir.',
    loadBalancingInfo: 'Varsayılan olarak, yük dengeleme Yuvarlakrobin stratejisini kullanır. Hız sınırlaması tetiklenirse, 1 dakikalık bir soğuma süresi uygulanacaktır.',
    upgradeForLoadBalancing: 'Yük Dengelemeyi etkinleştirmek için planınızı yükseltin.',
  },
  dataSource: {
    add: 'Bir veri kaynağı ekle',
    connect: 'Bağlan',
    configure: 'Yapılandır',
    notion: {
      title: 'Notion',
      description: 'Bilgi için veri kaynağı olarak Notion kullanma.',
      connectedWorkspace: 'Bağlı çalışma alanı',
      addWorkspace: 'Çalışma alanı ekle',
      connected: 'Bağlandı',
      disconnected: 'Bağlantı Kesildi',
      changeAuthorizedPages: 'Yetkilendirilen sayfaları değiştir',
      pagesAuthorized: 'Yetkilendirilen sayfalar',
      sync: 'Senkronize et',
      remove: 'Kaldır',
      selector: {
        pageSelected: 'Seçilen Sayfalar',
        searchPages: 'Sayfaları ara...',
        noSearchResult: 'Arama sonucu yok',
        addPages: 'Sayfa ekle',
        preview: 'ÖNİZLEME',
      },
    },
    website: {
      title: 'Web Sitesi',
      description: 'Web tarayıcı kullanarak web sitelerinden içerik içe aktarın.',
      with: 'İle',
      configuredCrawlers: 'Yapılandırılmış tarayıcılar',
      active: 'Aktif',
      inactive: 'Pasif',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'API Anahtarı',
      apiKeyPlaceholder: 'API anahtarınızı girin',
      keyFrom: 'SerpAPI Hesap Sayfasından SerpAPI anahtarınızı alın',
    },
  },
  apiBasedExtension: {
    title: 'API uzantıları merkezi API yönetimi sağlar, Mlchain\'nin uygulamaları arasında kolay kullanım için yapılandırmayı basitleştirir.',
    link: 'Kendi API Uzantınızı nasıl geliştireceğinizi öğrenin.',
    linkUrl: 'https://docs.mlchain.khulnasoft.com/features/extension/api_based_extension',
    add: 'API Uzantısı Ekle',
    selector: {
      title: 'API Uzantısı',
      placeholder: 'Lütfen API uzantısını seçin',
      manage: 'API Uzantısını Yönet',
    },
    modal: {
      title: 'API Uzantısı Ekle',
      editTitle: 'API Uzantısını Düzenle',
      name: {
        title: 'Ad',
        placeholder: 'Lütfen adı girin',
      },
      apiEndpoint: {
        title: 'API Uç Noktası',
        placeholder: 'Lütfen API uç noktasını girin',
      },
      apiKey: {
        title: 'API anahtarı',
        placeholder: 'Lütfen API anahtarını girin',
        lengthError: 'API anahtarı uzunluğu 5 karakterden az olamaz',
      },
    },
    type: 'Tür',
  },
  about: {
    changeLog: 'Değişiklik Günlüğü',
    updateNow: 'Şimdi güncelle',
    nowAvailable: 'Mlchain {{version}} şimdi mevcut.',
    latestAvailable: 'Mlchain {{version}} en son mevcut sürüm.',
  },
  appMenus: {
    overview: 'İzleme',
    promptEng: 'Orchestrate',
    apiAccess: 'API Erişimi',
    logAndAnn: 'Günlükler & Anlamlandırmalar',
    logs: 'Günlükler',
  },
  environment: {
    testing: 'TEST',
    development: 'GELİŞTİRME',
  },
  appModes: {
    completionApp: 'Metin Üreteci',
    chatApp: 'Sohbet Uygulaması',
  },
  datasetMenus: {
    documents: 'Belgeler',
    hitTesting: 'Geri Alım Testi',
    settings: 'Ayarlar',
    emptyTip: 'Bilgi ilişkilendirilmemiş, ilişkilendirme işlemini tamamlamak için uygulama veya eklentiye gidin.',
    viewDoc: 'Dökümantasyon görüntüle',
    relatedApp: 'bağlantılı uygulamalar',
  },
  voiceInput: {
    speaking: 'Şimdi konuş...',
    converting: 'Metne dönüştürülüyor...',
    notAllow: 'mikrofon yetkilendirilmedi',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Konuşmayı Yeniden Adlandır',
    conversationName: 'Konuşma adı',
    conversationNamePlaceholder: 'Konuşma adını girin',
    conversationNameCanNotEmpty: 'Konuşma adı gereklidir',
    citation: {
      title: 'ALINTILAR',
      linkToDataset: 'Bilgiye Bağlantı',
      characters: 'Karakterler:',
      hitCount: 'Geri Alım Sayısı:',
      vectorHash: 'Vektör Hash:',
      hitScore: 'Geri Alım Skoru:',
    },
  },
  promptEditor: {
    placeholder: 'Prompt kelimenizi buraya yazın, değişken eklemek için \'{\' tuşuna, prompt içerik bloğu eklemek için \'/\' tuşuna basın',
    context: {
      item: {
        title: 'Bağlam',
        desc: 'Bağlam şablonunu ekle',
      },
      modal: {
        title: 'Bağlamda {{num}} Knowledge',
        add: 'Bağlam Ekle',
        footer: 'Bağlamları aşağıdaki Bağlam bölümünde yönetebilirsiniz.',
      },
    },
    history: {
      item: {
        title: 'Konuşma Geçmişi',
        desc: 'Tarihi mesaj şablonunu ekle',
      },
      modal: {
        title: 'ÖRNEK',
        user: 'Merhaba',
        assistant: 'Merhaba! Bugün size nasıl yardımcı olabilirim?',
        edit: 'Konuşma Rol İsimlerini Düzenle',
      },
    },
    variable: {
      item: {
        title: 'Değişkenler & Harici Araçlar',
        desc: 'Değişkenler & Harici Araçlar ekle',
      },
      outputToolDisabledItem: {
        title: 'Değişkenler',
        desc: 'Değişkenleri ekle',
      },
      modal: {
        add: 'Yeni değişken',
        addTool: 'Yeni araç',
      },
    },
    query: {
      item: {
        title: 'Sorgu',
        desc: 'Kullanıcı sorgu şablonunu ekle',
      },
    },
    existed: 'Zaten prompt içinde mevcut',
  },
  imageUploader: {
    uploadFromComputer: 'Bilgisayardan Yükle',
    uploadFromComputerReadError: 'Görüntü okuma başarısız oldu, lütfen tekrar deneyin.',
    uploadFromComputerUploadError: 'Görüntü yükleme başarısız oldu, lütfen tekrar yükleyin.',
    uploadFromComputerLimit: 'Yükleme görüntüleri {{size}} MB\'yi aşamaz',
    pasteImageLink: 'Görüntü bağlantısını yapıştır',
    pasteImageLinkInputPlaceholder: 'Görüntü bağlantısını buraya yapıştırın',
    pasteImageLinkInvalid: 'Geçersiz görüntü bağlantısı',
    imageUpload: 'Görüntü Yükleme',
  },
  tag: {
    placeholder: 'Tüm Etiketler',
    addNew: 'Yeni etiket ekle',
    noTag: 'Etiket yok',
    noTagYet: 'Henüz etiket yok',
    addTag: 'Etiket ekle',
    editTag: 'Etiketleri düzenle',
    manageTags: 'Etiketleri Yönet',
    selectorPlaceholder: 'Aramak veya oluşturmak için yazın',
    create: 'Oluştur',
    delete: 'Etiketi sil',
    deleteTip: 'Etiket kullanılıyor, silinsin mi?',
    created: 'Etiket başarıyla oluşturuldu',
    failed: 'Etiket oluşturma başarısız oldu',
  },
}

export default translation
