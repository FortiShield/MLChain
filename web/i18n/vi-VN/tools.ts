const translation = {
  title: 'Công cụ',
  createCustomTool: 'Tạo công cụ tùy chỉnh',
  type: {
    all: 'Tất cả',
    builtIn: 'Tích hợp sẵn',
    custom: 'Tùy chỉnh',
  },
  contribute: {
    line1: 'Tôi quan tâm đến việc ',
    line2: 'đóng góp công cụ cho Mlchain.',
    viewGuide: 'Xem hướng dẫn',
  },
  author: 'Tác giả',
  auth: {
    unauthorized: 'Chưa xác thực',
    authorized: 'Đã xác thực',
    setup: 'Thiết lập xác thực để sử dụng',
    setupModalTitle: 'Thiết lập xác thực',
    setupModalTitleDescription: 'Sau khi cấu hình thông tin đăng nhập, tất cả thành viên trong không gian làm việc có thể sử dụng công cụ này khi triển khai ứng dụng.',
  },
  includeToolNum: 'Bao gồm {{num}} công cụ',
  addTool: 'Thêm công cụ',
  createTool: {
    title: 'Tạo công cụ tùy chỉnh',
    editAction: 'Cấu hình',
    editTitle: 'Chỉnh sửa công cụ tùy chỉnh',
    name: 'Tên',
    toolNamePlaceHolder: 'Nhập tên công cụ',
    schema: 'Schema',
    schemaPlaceHolder: 'Nhập schema OpenAPI của bạn vào đây',
    viewSchemaSpec: 'Xem chi tiết OpenAPI-Swagger',
    importFromUrl: 'Nhập từ URL',
    importFromUrlPlaceHolder: 'https://...',
    urlError: 'Vui lòng nhập URL hợp lệ',
    examples: 'Ví dụ',
    exampleOptions: {
      json: 'Thời tiết (JSON)',
      yaml: 'Cửa hàng thú cưng (YAML)',
      blankTemplate: 'Mẫu trống',
    },
    availableTools: {
      title: 'Công cụ hiện có',
      name: 'Tên',
      description: 'Mô tả',
      method: 'Phương thức',
      path: 'Đường dẫn',
      action: 'Hành động',
      test: 'Kiểm tra',
    },
    authMethod: {
      title: 'Phương thức xác thực',
      type: 'Loại xác thực',
      keyTooltip: 'Khóa tiêu đề HTTP, bạn có thể để trống nếu không biết hoặc đặt một giá trị tùy chỉnh',
      types: {
        none: 'Không',
        api_key: 'Khóa API',
        apiKeyPlaceholder: 'Tên tiêu đề HTTP cho Khóa API',
        apiValuePlaceholder: 'Nhập Khóa API',
      },
      key: 'Khóa',
      value: 'Giá trị',
    },
    authHeaderPrefix: {
      title: 'Loại xác thực',
      types: {
        basic: 'Cơ bản',
        bearer: 'Bearer',
        custom: 'Tùy chỉnh',
      },
    },
    privacyPolicy: 'Chính sách bảo mật',
    privacyPolicyPlaceholder: 'Vui lòng nhập chính sách bảo mật',
    customDisclaimer: 'Tuyên bố từ chối trách nhiệm tùy chỉnh',
    customDisclaimerPlaceholder: 'Vui lòng nhập tuyên bố từ chối trách nhiệm tùy chỉnh',
    deleteToolConfirmTitle: 'Xóa công cụ này?',
    deleteToolConfirmContent: 'Xóa công cụ là không thể hoàn tác. Người dùng sẽ không thể truy cập lại công cụ của bạn.',
  },
  test: {
    title: 'Kiểm tra',
    parametersValue: 'Tham số & Giá trị',
    parameters: 'Tham số',
    value: 'Giá trị',
    testResult: 'Kết quả kiểm tra',
    testResultPlaceholder: 'Kết quả kiểm tra sẽ hiển thị ở đây',
  },
  thought: {
    using: 'Đang sử dụng',
    used: 'Đã sử dụng',
    requestTitle: 'Yêu cầu đến',
    responseTitle: 'Phản hồi từ',
  },
  setBuiltInTools: {
    info: 'Thông tin',
    setting: 'Cài đặt',
    toolDescription: 'Mô tả công cụ',
    parameters: 'Tham số',
    string: 'chuỗi',
    number: 'số',
    required: 'Bắt buộc',
    infoAndSetting: 'Thông tin & Cài đặt',
  },
  noCustomTool: {
    title: 'Chưa có công cụ tùy chỉnh!',
    content: 'Thêm và quản lý các công cụ tùy chỉnh của bạn ở đây để xây dựng ứng dụng AI.',
    createTool: 'Tạo công cụ',
  },
  noSearchRes: {
    title: 'Xin lỗi, không có kết quả!',
    content: 'Chúng tôi không tìm thấy công cụ nào phù hợp với tìm kiếm của bạn.',
    reset: 'Đặt lại tìm kiếm',
  },
  builtInPromptTitle: 'Lời nhắc',
  toolRemoved: 'Công cụ đã bị xóa',
  notAuthorized: 'Công cụ chưa được xác thực',
  howToGet: 'Cách nhận',
}

export default translation
