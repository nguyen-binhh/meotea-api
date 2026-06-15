// ─── Post Categories ──────────────────────────────────────────────────────────

export const postCategoryData = [
  { name: 'Tin tức',    slug: 'tin-tuc',    description: 'Tin tức mới nhất từ Mèo Trà',               sortOrder: 1 },
  { name: 'Khuyến mãi', slug: 'khuyen-mai', description: 'Ưu đãi và chương trình khuyến mãi hấp dẫn', sortOrder: 2 },
  { name: 'Hướng dẫn',  slug: 'huong-dan',  description: 'Mẹo và hướng dẫn thưởng thức trà',          sortOrder: 3 },
  { name: 'Sức khỏe',   slug: 'suc-khoe',   description: 'Trà và sức khỏe – những điều bạn cần biết', sortOrder: 4 },
  { name: 'Câu chuyện', slug: 'cau-chuyen', description: 'Câu chuyện đằng sau những ly trà',          sortOrder: 5 },
];

// ─── Posts ────────────────────────────────────────────────────────────────────

export const postData = [
  {
    title: 'Mèo Trà Chính Thức Khai Trương – Chào Mừng Bạn Đến Với Thế Giới Trà',
    subtitle: 'Hành trình từ những hạt trà thượng hạng đến ly nước ngon tuyệt',
    slug: 'meo-tra-chinh-thuc-khai-truong',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    isActive: true,
    content: `<h2>Chào mừng bạn đến với Mèo Trà!</h2>
<p>Sau nhiều tháng chuẩn bị, chúng tôi tự hào chính thức khai trương cửa hàng Mèo Trà – nơi hội tụ của những tín đồ yêu trà và các thức uống sáng tạo.</p>
<h3>Tại sao là Mèo Trà?</h3>
<p>Chúng tôi tin rằng một ly trà ngon không chỉ đơn giản là pha nước với trà. Đó là cả một nghệ thuật, một câu chuyện từ vườn trà đến tách sứ của bạn.</p>
<ul>
  <li>🍃 Nguyên liệu chọn lọc từ các vùng trà nổi tiếng</li>
  <li>🧋 Công thức độc quyền được nghiên cứu kỹ lưỡng</li>
  <li>💝 Phục vụ tận tâm, mang lại trải nghiệm tốt nhất</li>
</ul>
<p>Hãy ghé thăm chúng tôi và cảm nhận sự khác biệt trong từng ngụm trà!</p>`,
  },
  {
    title: 'Bí Quyết Pha Trà Sữa Ngon Tại Nhà Theo Phong Cách Mèo Trà',
    subtitle: 'Hướng dẫn chi tiết từ A đến Z để có ly trà sữa hoàn hảo',
    slug: 'bi-quyet-pha-tra-sua-ngon-tai-nha',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800',
    isActive: true,
    content: `<h2>Pha Trà Sữa Ngon Tại Nhà</h2>
<p>Bạn có thể tự pha cho mình một ly trà sữa ngon không kém quán chỉ với vài nguyên liệu đơn giản. Dưới đây là công thức bí mật của Mèo Trà!</p>
<h3>Nguyên liệu cần chuẩn bị</h3>
<ul>
  <li>2 thìa cà phê trà đen (hoặc 2 túi trà)</li>
  <li>200ml nước sôi</li>
  <li>100ml sữa tươi không đường</li>
  <li>2 thìa đường theo khẩu vị</li>
  <li>Trân châu đen (nếu thích)</li>
</ul>
<h3>Các bước thực hiện</h3>
<ol>
  <li>Pha trà với nước sôi, để 3-5 phút rồi lọc bỏ bã.</li>
  <li>Thêm đường vào trà khi còn nóng, khuấy đều.</li>
  <li>Để nguội rồi cho vào tủ lạnh khoảng 15 phút.</li>
  <li>Thêm đá, đổ sữa vào và khuấy đều.</li>
  <li>Thêm trân châu đã nấu chín vào và thưởng thức!</li>
</ol>
<p><em>Mẹo nhỏ: Dùng trà Assam hoặc Ceylon sẽ cho vị đậm đà hơn!</em></p>`,
  },
  {
    title: 'Matcha – Siêu Thực Phẩm Xanh Và Những Lợi Ích Sức Khỏe Không Ngờ',
    subtitle: 'Tại sao matcha Nhật Bản lại được cả thế giới yêu thích?',
    slug: 'matcha-sieu-thuc-pham-xanh-loi-ich-suc-khoe',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800',
    isActive: true,
    content: `<h2>Matcha – Không Chỉ Là Màu Xanh</h2>
<p>Matcha (抹茶) đã có lịch sử hơn 800 năm tại Nhật Bản và ngày nay đã trở thành xu hướng toàn cầu. Nhưng bạn có biết tại sao không?</p>
<h3>Thành phần dinh dưỡng vượt trội</h3>
<p>Matcha chứa hàm lượng chất chống oxy hóa (catechins) cao gấp 137 lần so với trà xanh thông thường. Đặc biệt, L-theanine trong matcha giúp tăng cường tập trung mà không gây căng thẳng như caffeine thông thường.</p>
<h3>Lợi ích sức khỏe</h3>
<ul>
  <li>✅ Tăng cường hệ miễn dịch</li>
  <li>✅ Cải thiện tập trung và năng lượng</li>
  <li>✅ Hỗ trợ giảm cân tự nhiên</li>
  <li>✅ Bảo vệ gan và tim mạch</li>
</ul>
<p>Tại Mèo Trà, chúng tôi sử dụng matcha nghi thức (ceremonial grade) nhập khẩu trực tiếp từ Uji, Kyoto – vùng matcha nổi tiếng nhất Nhật Bản.</p>`,
  },
  {
    title: 'Top 5 Đồ Uống Hot Nhất Mùa Hè Tại Mèo Trà',
    subtitle: 'Những ly nước giải nhiệt hoàn hảo cho những ngày nắng',
    slug: 'top-5-do-uong-hot-nhat-mua-he',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
    isActive: true,
    content: `<h2>Mùa Hè Cần Gì? Cần Mèo Trà!</h2>
<p>Nắng nóng oi bức của mùa hè không còn là nỗi lo khi bạn có những ly nước tuyệt vời từ Mèo Trà. Dưới đây là top 5 đồ uống được yêu thích nhất!</p>
<h3>1. Trà Đào Cam Sả</h3>
<p>Sự kết hợp hoàn hảo giữa đào ngọt ngào, cam tươi và sả thơm. Vừa ngon vừa thanh mát, đây là lựa chọn số 1 của mùa hè.</p>
<h3>2. Trà Vải Lychee Soda</h3>
<p>Vị vải thiều tươi ngọt kết hợp với soda tạo nên bong bóng vui mắt. Siêu giải khát!</p>
<h3>3. Trà Sữa Taro Khoai Môn</h3>
<p>Màu tím mộng mơ với vị ngọt béo tự nhiên từ khoai môn. Luôn trong top bán chạy!</p>
<h3>4. Trà Sữa Oolong Kem Cheese</h3>
<p>Lớp kem cheese mát lạnh phủ lên trà oolong thơm thoảng – combo không thể cưỡng lại.</p>
<h3>5. Mèo Trà Đặc Biệt</h3>
<p>Thức uống signature với công thức bí mật. Chỉ có tại Mèo Trà!</p>`,
  },
  {
    title: 'Trân Châu – Từ Đài Loan Đến Toàn Thế Giới',
    subtitle: 'Câu chuyện thú vị về nguồn gốc của nguyên liệu không thể thiếu trong trà sữa',
    slug: 'tran-chau-tu-dai-loan-den-toan-the-gioi',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
    isActive: true,
    content: `<h2>Hành Trình Của Những Viên Trân Châu</h2>
<p>Bạn có biết rằng trân châu (boba/tapioca pearls) có nguồn gốc từ Đài Loan vào những năm 1980 không? Đây là câu chuyện thú vị về hành trình chinh phục thế giới của những viên trân châu!</p>
<h3>Nguồn gốc từ Đài Loan</h3>
<p>Vào năm 1986, chủ quán trà Lin Hsiu Hui đã thử thêm bột tapioca vào trà sữa lạnh của mình – và thế là trà sữa trân châu ra đời! Công thức này nhanh chóng lan rộng khắp Đài Loan và sau đó là toàn thế giới.</p>
<h3>Trân châu được làm từ gì?</h3>
<p>Trân châu được làm từ tinh bột sắn (cassava starch), đường nâu và nước. Quá trình nấu đòi hỏi kỹ thuật cao để có được viên trân châu dai mềm hoàn hảo.</p>
<h3>Tại Mèo Trà</h3>
<p>Chúng tôi nấu trân châu tươi mỗi ngày, đảm bảo độ dai mềm tuyệt vời trong từng ly trà. Không dùng trân châu đông lạnh hay để qua đêm!</p>`,
  },
  {
    title: 'Oolong – Loại Trà Đặc Biệt Giữa Trà Xanh Và Trà Đen',
    subtitle: 'Khám phá thế giới phong phú của trà Oolong và cách thưởng thức đúng điệu',
    slug: 'oolong-loai-tra-dac-biet',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800',
    isActive: true,
    content: `<h2>Oolong – Nghệ Thuật Lên Men Không Hoàn Toàn</h2>
<p>Oolong (烏龍茶 – trà ô long) là một trong những loại trà đặc biệt nhất thế giới với mức độ oxy hóa từ 15% đến 85%, tạo nên hương vị đa dạng từ thanh nhẹ đến đậm đà.</p>
<h3>Đặc điểm nổi bật</h3>
<p>Không giống như trà xanh (không oxy hóa) hay trà đen (oxy hóa hoàn toàn), Oolong có vị đặc trưng riêng – vừa có độ thơm hoa quả của trà xanh, vừa có vị đậm đà của trà đen.</p>
<h3>Các loại Oolong nổi tiếng</h3>
<ul>
  <li><strong>Tie Guan Yin (Thiết Quan Âm):</strong> Thanh nhẹ, hương hoa orchid</li>
  <li><strong>Da Hong Pao (Đại Hồng Bào):</strong> Đậm đà, hương gỗ và đất</li>
  <li><strong>Dong Ding:</strong> Cân bằng, được ưa chuộng tại Đài Loan</li>
</ul>
<p>Tại Mèo Trà, chúng tôi dùng Oolong Đài Loan cao cấp để pha chế Trà Sữa Oolong Kem Cheese – món hot nhất trong menu!</p>`,
  },
  {
    title: 'Chương Trình Khách Hàng Thân Thiết Mèo Trà – Tích Điểm Đổi Quà',
    subtitle: 'Mua nhiều tặng nhiều – Cảm ơn bạn đã đồng hành cùng Mèo Trà',
    slug: 'chuong-trinh-khach-hang-than-thiet',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800',
    isActive: true,
    content: `<h2>Ưu Đãi Dành Riêng Cho Khách Hàng Thân Thiết</h2>
<p>Mèo Trà trân trọng từng khách hàng đã tin tưởng và ủng hộ chúng tôi. Chính vì vậy, chúng tôi ra mắt chương trình tích điểm đổi quà hấp dẫn!</p>
<h3>Cách tích điểm</h3>
<ul>
  <li>🌟 Mỗi 10.000đ = 1 điểm</li>
  <li>🌟 Sinh nhật: x3 điểm cho toàn bộ đơn hàng</li>
  <li>🌟 Giới thiệu bạn bè: +50 điểm/người</li>
</ul>
<h3>Đổi điểm lấy gì?</h3>
<table>
  <tr><td>50 điểm</td><td>1 ly trà sữa size M miễn phí</td></tr>
  <tr><td>100 điểm</td><td>1 ly trà sữa size L miễn phí</td></tr>
  <tr><td>200 điểm</td><td>Combo 2 ly + 1 phần topping</td></tr>
</table>
<p>Đăng ký tài khoản ngay hôm nay để bắt đầu tích điểm!</p>`,
  },
  {
    title: 'Hậu Trường Mèo Trà – Một Ngày Làm Việc Của Barista',
    subtitle: 'Khám phá bí mật đằng sau mỗi ly trà được pha chế với tình yêu',
    slug: 'hau-truong-meo-tra-barista',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    isActive: true,
    content: `<h2>Một Ngày Của Barista Mèo Trà</h2>
<p>Bao giờ bạn cũng tự hỏi điều gì xảy ra đằng sau quầy pha chế? Hãy cùng chúng tôi khám phá hậu trường của Mèo Trà!</p>
<h3>6:00 sáng – Chuẩn bị nguyên liệu</h3>
<p>Barista bắt đầu ngày mới bằng việc nấu trân châu tươi. Quá trình nấu mất khoảng 45 phút để có được viên trân châu đạt chuẩn. Sau đó ngâm trong syrup đường nâu để tạo độ ngọt và bóng đẹp.</p>
<h3>7:00 sáng – Pha trà gốc</h3>
<p>Các loại trà được pha theo tỷ lệ chuẩn: nhiệt độ nước, thời gian ngâm và lượng trà đều được kiểm soát chặt chẽ để đảm bảo chất lượng đồng nhất.</p>
<h3>8:00 sáng – Mở cửa phục vụ</h3>
<p>Khi cửa hàng mở cửa, mỗi ly trà được pha chế riêng lẻ theo yêu cầu của khách, đảm bảo luôn tươi ngon nhất!</p>
<blockquote><em>"Mỗi ly trà là một tác phẩm nghệ thuật nhỏ. Chúng tôi không chỉ pha nước, chúng tôi tạo ra trải nghiệm." – Barista Mèo Trà</em></blockquote>`,
  },
  {
    title: 'Trà Sữa Và Sức Khỏe – Những Điều Bạn Cần Biết Để Uống Đúng Cách',
    subtitle: 'Giải đáp mọi thắc mắc về việc uống trà sữa có ảnh hưởng đến sức khỏe không',
    slug: 'tra-sua-va-suc-khoe',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800',
    isActive: true,
    content: `<h2>Uống Trà Sữa Đúng Cách – Vẫn Khỏe Mạnh Vui Vẻ!</h2>
<p>Nhiều người lo ngại rằng trà sữa không tốt cho sức khỏe. Hãy cùng tìm hiểu sự thật và cách uống thông minh!</p>
<h3>Thực hư về trà sữa</h3>
<p>Trà sữa không xấu nếu được uống điều độ và chọn đúng loại. Trà chứa chất chống oxy hóa, sữa cung cấp canxi và protein. Vấn đề chủ yếu nằm ở lượng đường và calo.</p>
<h3>Tips uống trà sữa lành mạnh hơn</h3>
<ul>
  <li>🔹 Chọn mức đường 30-50% thay vì 100%</li>
  <li>🔹 Chọn ít đá hoặc không đá để không làm loãng hương vị</li>
  <li>🔹 Hạn chế topping nhiều đường</li>
  <li>🔹 Không uống quá 1-2 ly/tuần</li>
  <li>🔹 Chọn các loại trà thuần như trà xanh, oolong thay vì trà sữa nhiều kem</li>
</ul>
<h3>Tại Mèo Trà</h3>
<p>Chúng tôi luôn minh bạch về nguyên liệu và cho phép bạn tùy chỉnh mức đường, đá theo sở thích. Sức khỏe của bạn là ưu tiên của chúng tôi!</p>`,
  },
  {
    title: 'Mùa Thu Về – Những Hương Vị Trà Đặc Biệt Chào Đón Tiết Trời Mới',
    subtitle: 'Menu giới hạn mùa thu với những nguyên liệu tươi ngon đặc trưng',
    slug: 'mua-thu-ve-huong-vi-tra-dac-biet',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    isActive: false,
    content: `<h2>Chào Mùa Thu – Chào Những Hương Vị Mới!</h2>
<p>Tiết trời mùa thu se lạnh là thời điểm lý tưởng để thưởng thức những ly trà ấm áp. Mèo Trà ra mắt menu đặc biệt mùa thu với những hương vị độc đáo!</p>
<h3>Menu Giới Hạn Mùa Thu</h3>
<h4>🍂 Trà Hồng Quế Mùa Thu</h4>
<p>Trà đen pha cùng quế, hồi và cam – hương ấm áp đặc trưng của mùa thu. Thêm sữa tươi để có cảm giác nhung mịn tuyệt vời.</p>
<h4>🍁 Latte Khoai Lang Tím</h4>
<p>Khoai lang tím Đà Lạt xay mịn kết hợp espresso và sữa oat – xu hướng thu đông không thể bỏ qua.</p>
<h4>🌰 Trà Sữa Hạt Dẻ</h4>
<p>Hạt dẻ nướng xay nhuyễn pha cùng trà oolong và sữa tươi – mùi hương khó quên của những buổi chiều thu.</p>
<p><strong>⏰ Menu giới hạn chỉ có từ 01/09 đến 30/11. Đừng bỏ lỡ!</strong></p>`,
  },

  // ── TIN TỨC (thêm 8 bài) ─────────────────────────────────────────────────
  {
    title: 'Mèo Trà Khai Trương Chi Nhánh Mới Tại Bình Dương',
    subtitle: 'Thêm một điểm đến mới cho những tín đồ trà sữa phía Bình Dương',
    slug: 'meo-tra-khai-truong-chi-nhanh-binh-duong',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
    isActive: true,
    content: `<h2>Chi Nhánh Bình Dương Chính Thức Mở Cửa</h2>
<p>Sau thành công tại TP.HCM, Mèo Trà tự hào khai trương chi nhánh tại Thuận An, Bình Dương. Không gian rộng rãi, thiết kế đặc trưng với tông hồng pastel và hình ảnh mèo dễ thương trên khắp các góc tường.</p>
<p>Để chào mừng khai trương, Mèo Trà dành tặng <strong>voucher giảm 20%</strong> cho 500 khách hàng đầu tiên và <strong>1 ly trà miễn phí</strong> cho khách check-in tại cửa hàng. Ghé thăm chúng tôi và cảm nhận sự khác biệt!</p>`,
  },
  {
    title: 'Mèo Trà Lọt Top 10 Thương Hiệu Trà Sữa Được Yêu Thích Nhất 2024',
    subtitle: 'Danh hiệu do người tiêu dùng bình chọn, khẳng định chất lượng Mèo Trà',
    slug: 'meo-tra-top-10-thuong-hieu-tra-sua-2024',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1562547256-2c5ee990e6d8?w=800',
    isActive: true,
    content: `<h2>Vinh Dự Được Người Tiêu Dùng Công Nhận</h2>
<p>Tạp chí Lifestyle Vietnam vừa công bố danh sách "Top 10 Thương Hiệu Trà Sữa Được Yêu Thích Nhất 2024" dựa trên khảo sát hơn 50.000 người tiêu dùng trên toàn quốc. Mèo Trà tự hào góp mặt ở vị trí thứ 7 – một cột mốc đáng tự hào chỉ sau 2 năm hoạt động.</p>
<p>Yếu tố được đánh giá cao nhất là chất lượng nguyên liệu (4.9/5), thái độ phục vụ (4.8/5) và sự sáng tạo trong menu (4.7/5). Cảm ơn mọi khách hàng đã tin yêu và đồng hành cùng Mèo Trà!</p>`,
  },
  {
    title: 'Sự Kiện Workshop Pha Trà Chuyên Nghiệp Cùng Barista Mèo Trà',
    subtitle: 'Học bí quyết pha chế từ các barista nhiều năm kinh nghiệm của Mèo Trà',
    slug: 'workshop-pha-tra-chuyen-nghiep-cung-barista',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800',
    isActive: true,
    content: `<h2>Workshop Pha Trà – Trải Nghiệm Không Thể Bỏ Lỡ</h2>
<p>Mèo Trà tổ chức workshop pha trà chuyên nghiệp vào cuối tháng 7, dành cho những ai đam mê trà và muốn học kỹ thuật pha chế chuẩn barista. Chương trình kéo dài 3 tiếng, bao gồm lý thuyết về các loại trà và thực hành pha chế 5 loại đồ uống signature.</p>
<p>Số lượng chỉ 20 người/buổi để đảm bảo chất lượng hướng dẫn. Học viên sẽ được tặng bộ dụng cụ pha trà mini và voucher 50k cho lần ghé thăm tiếp theo. Đăng ký sớm để giữ chỗ!</p>`,
  },
  {
    title: 'Mèo Trà Tham Gia Lễ Hội Ẩm Thực Quốc Tế Saigon Food Fest 2024',
    subtitle: 'Mang hương vị Mèo Trà đến giao lưu cùng hàng trăm thương hiệu ẩm thực quốc tế',
    slug: 'meo-tra-saigon-food-fest-2024',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=800',
    isActive: true,
    content: `<h2>Mèo Trà Gây Ấn Tượng Tại Saigon Food Fest</h2>
<p>Saigon Food Fest 2024 quy tụ hơn 200 thương hiệu ẩm thực từ 15 quốc gia. Mèo Trà mang đến gian hàng đặc trưng với menu giới hạn gồm 8 loại đồ uống signature, thu hút hàng nghìn lượt khách tham quan và thưởng thức mỗi ngày.</p>
<p>Điểm nhấn của gian hàng là khu vực "Build Your Own Boba" – nơi khách hàng tự chọn nguyên liệu và tạo ra ly trà sữa theo phong cách riêng. Sự kiện kéo dài 4 ngày và Mèo Trà đã phục vụ tổng cộng hơn 3.000 ly đồ uống.</p>`,
  },
  {
    title: 'Khai Trương Pop-Up Store Mèo Trà Tại Vincom Đồng Khởi',
    subtitle: 'Trải nghiệm không gian Mèo Trà theo phong cách hoàn toàn mới tại trung tâm thương mại',
    slug: 'pop-up-store-meo-tra-vincom-dong-khoi',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    isActive: true,
    content: `<h2>Pop-Up Store – Trải Nghiệm Mới Từ Mèo Trà</h2>
<p>Mèo Trà chính thức khai trương pop-up store tại Vincom Đồng Khởi, tầng B1, từ ngày 15 đến 30 tháng này. Đây là không gian thử nghiệm concept mới của thương hiệu – nơi kết hợp giữa quán trà hiện đại và khu vực triển lãm nghệ thuật về mèo.</p>
<p>Tại pop-up, khách hàng có thể thưởng thức các đồ uống giới hạn chưa có trong menu chính thức, đồng thời tham gia trò chuyện trực tiếp với đội ngũ nghiên cứu thực đơn của Mèo Trà để đưa ra phản hồi. Đây là cơ hội hiếm có để ảnh hưởng đến menu tương lai!</p>`,
  },
  {
    title: 'Menu Mới Đông 2024 – 5 Hương Vị Ấm Áp Chào Đón Tiết Trời Se Lạnh',
    subtitle: 'Những ly trà nóng và toppings mùa đông đặc biệt chỉ có tại Mèo Trà',
    slug: 'menu-moi-dong-2024-huong-vi-am-ap',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800',
    isActive: true,
    content: `<h2>5 Hương Vị Đặc Biệt Cho Mùa Đông 2024</h2>
<p>Tiết trời se lạnh của mùa đông là lúc Mèo Trà ra mắt loạt thức uống ấm áp mới. Bộ sưu tập Đông 2024 bao gồm: Trà Gừng Mật Ong, Matcha Latte Ấm, Trà Đen Hồng Quế, Oolong Hạt Nhục Đậu Khấu và Trà Sữa Đường Đen Nóng.</p>
<p>Đặc biệt, mùa đông năm nay Mèo Trà giới thiệu topping mới: <strong>trân châu đường đen nóng</strong> và <strong>pudding trà xanh</strong> – hai topping được cộng đồng mong đợi nhất. Menu đông có hiệu lực từ ngày 01/12 đến hết tháng 2 năm sau.</p>`,
  },
  {
    title: 'Mèo Trà Đạt Chứng Nhận An Toàn Thực Phẩm 5 Sao Từ Sở Y Tế TP.HCM',
    subtitle: 'Cam kết chất lượng và an toàn vệ sinh thực phẩm trong từng ly trà',
    slug: 'chung-nhan-an-toan-thuc-pham-5-sao',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    isActive: true,
    content: `<h2>Chứng Nhận 5 Sao – Niềm Tự Hào Của Mèo Trà</h2>
<p>Sau quá trình kiểm định nghiêm ngặt của Sở Y Tế TP.HCM, toàn bộ hệ thống cửa hàng Mèo Trà đã đạt chứng nhận An Toàn Vệ Sinh Thực Phẩm 5 sao – mức đánh giá cao nhất hiện nay. Đây là sự ghi nhận xứng đáng cho những nỗ lực không ngừng của đội ngũ trong việc đảm bảo chất lượng.</p>
<p>Quy trình kiểm định bao gồm kiểm tra nguyên liệu đầu vào, quy trình pha chế, vệ sinh dụng cụ và môi trường làm việc. Tất cả đều đạt tiêu chuẩn tối đa. Bạn có thể hoàn toàn yên tâm khi thưởng thức trà tại Mèo Trà!</p>`,
  },
  {
    title: 'Mèo Trà Và Vinamilk Ký Kết Hợp Tác Chiến Lược – Cam Kết Nguồn Sữa Sạch',
    subtitle: 'Đảm bảo nguồn sữa tươi đạt chuẩn quốc tế cho mọi sản phẩm của Mèo Trà',
    slug: 'hop-tac-chien-luoc-meo-tra-vinamilk',
    categorySlug: 'tin-tuc',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
    isActive: true,
    content: `<h2>Hợp Tác Chiến Lược Vì Chất Lượng Tốt Hơn</h2>
<p>Mèo Trà vừa ký kết hợp đồng hợp tác chiến lược dài hạn với Vinamilk – thương hiệu sữa hàng đầu Việt Nam. Theo đó, 100% sữa tươi sử dụng trong các sản phẩm của Mèo Trà sẽ đến từ trang trại bò sữa chuẩn organic của Vinamilk, đảm bảo nguồn gốc minh bạch và chất lượng cao nhất.</p>
<p>Đây là bước đi quan trọng trong chiến lược nâng cao chất lượng nguyên liệu của Mèo Trà. Khách hàng sẽ không cần lo lắng về nguồn gốc sữa – tất cả đều có thể truy xuất minh bạch qua mã QR trên mỗi cốc trà.</p>`,
  },

  // ── KHUYẾN MÃI (thêm 9 bài) ──────────────────────────────────────────────
  {
    title: 'Happy Wednesday – Mua 1 Tặng 1 Mỗi Thứ Tư Hàng Tuần',
    subtitle: 'Rủ người thân đến Mèo Trà vào thứ Tư để nhận ly trà miễn phí',
    slug: 'happy-wednesday-mua-1-tang-1',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800',
    isActive: true,
    content: `<h2>Thứ Tư Vui – Mua 1 Tặng 1!</h2>
<p>Bắt đầu từ tháng này, mỗi thứ Tư hàng tuần, Mèo Trà áp dụng chương trình <strong>Happy Wednesday</strong>: mua 1 ly bất kỳ sẽ được tặng thêm 1 ly cùng loại, cùng size. Chương trình áp dụng từ 14:00 – 20:00, không giới hạn số lượng giao dịch.</p>
<p>Chương trình không áp dụng cho đồ uống giới hạn và không kết hợp với các ưu đãi khác. Rủ bạn bè, người thân đến Mèo Trà ngay thứ Tư tuần này để tận hưởng ưu đãi!</p>`,
  },
  {
    title: 'Giảm 30% Cho Sinh Viên – Xuất Trình Thẻ Sinh Viên Là Được',
    subtitle: 'Mèo Trà đồng hành cùng các bạn sinh viên với ưu đãi đặc biệt suốt năm học',
    slug: 'giam-30-phan-tram-cho-sinh-vien',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800',
    isActive: true,
    content: `<h2>Ưu Đãi Sinh Viên – Tiết Kiệm Thật Nhiều!</h2>
<p>Mèo Trà hiểu rằng cuộc sống sinh viên đôi khi có nhiều áp lực về tài chính. Vì vậy, chúng tôi dành riêng ưu đãi <strong>giảm 30%</strong> cho tất cả sinh viên còn hạn thẻ. Chỉ cần xuất trình thẻ sinh viên (bản gốc hoặc ảnh chụp rõ ràng) là bạn được hưởng ngay.</p>
<p>Ưu đãi áp dụng mỗi ngày trong tuần học, không giới hạn số lần sử dụng. Mèo Trà muốn trở thành điểm nghỉ ngơi quen thuộc sau những giờ học căng thẳng của bạn!</p>`,
  },
  {
    title: 'Flash Sale Cuối Tuần – Giảm Đến 50% Chỉ Từ 15:00 Đến 17:00',
    subtitle: 'Hai tiếng vàng mỗi cuối tuần để bạn thưởng thức trà sữa với giá siêu hời',
    slug: 'flash-sale-cuoi-tuan-giam-50-phan-tram',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800',
    isActive: true,
    content: `<h2>Flash Sale Mỗi Thứ 7 & Chủ Nhật!</h2>
<p>Chỉ trong 2 tiếng từ <strong>15:00 đến 17:00</strong> mỗi thứ 7 và chủ nhật, Mèo Trà giảm đến 50% cho một số đồ uống được chọn ngẫu nhiên. Danh sách đồ uống Flash Sale sẽ được công bố lúc 12:00 trưa cùng ngày trên fanpage và story Instagram của Mèo Trà.</p>
<p>Theo dõi kênh mạng xã hội của chúng tôi để không bỏ lỡ bất kỳ Flash Sale nào. Số lượng có giới hạn – ai nhanh tay người đó có lợi!</p>`,
  },
  {
    title: 'Combo Đôi Chỉ 79.000đ – Gọi Cho Người Thương Cùng Thưởng Thức',
    subtitle: 'Hai ly trà sữa ngon, một kỷ niệm đẹp – tất cả chỉ 79k',
    slug: 'combo-doi-chi-79k',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
    isActive: true,
    content: `<h2>Combo Đôi – Chia Sẻ Yêu Thương</h2>
<p>Mèo Trà ra mắt <strong>Combo Đôi giá 79.000đ</strong> – bao gồm 2 ly trà sữa bất kỳ (size M), tiết kiệm đến 30% so với gọi lẻ. Combo này hoàn hảo cho những buổi hẹn hò, gặp gỡ bạn bè hay đơn giản là một chiều thứ 6 nhẹ nhàng cùng đồng nghiệp.</p>
<p>Áp dụng cho tất cả đồ uống trong menu chính, trừ các loại đặc biệt có phụ phí. Hãy rủ người thương đến Mèo Trà ngay nhé!</p>`,
  },
  {
    title: 'Miễn Phí Topping Tháng 8 – Tặng Thêm Yêu Thương Trong Mùa Hè',
    subtitle: 'Cả tháng 8 được thêm topping miễn phí cho mọi đơn hàng tại Mèo Trà',
    slug: 'mien-phi-topping-thang-8',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800',
    isActive: true,
    content: `<h2>Tháng 8 – Tháng Của Những Niềm Vui Nhỏ</h2>
<p>Trong suốt tháng 8, mỗi đơn hàng tại Mèo Trà được miễn phí <strong>1 loại topping tùy chọn</strong> (trân châu đen, trân châu trắng, thạch cà phê hoặc nata de coco). Đây là cách chúng tôi cảm ơn sự đồng hành của khách hàng trong suốt một năm qua.</p>
<p>Topping miễn phí áp dụng cho mỗi ly trong đơn, không giới hạn số lượng đơn hàng. Ưu đãi có hiệu lực từ 01/08 đến 31/08 tại tất cả chi nhánh Mèo Trà.</p>`,
  },
  {
    title: 'Ưu Đãi Sinh Nhật Mèo Trà – Tặng 1 Ly Miễn Phí Trong Ngày Đặc Biệt',
    subtitle: 'Mèo Trà muốn là một phần trong ngày sinh nhật tuyệt vời của bạn',
    slug: 'uu-dai-sinh-nhat-tang-1-ly-mien-phi',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800',
    isActive: true,
    content: `<h2>Sinh Nhật Của Bạn – Quà Từ Mèo Trà</h2>
<p>Đăng ký tài khoản Mèo Trà với ngày sinh nhật của bạn và nhận ngay <strong>1 ly trà tùy chọn miễn phí</strong> trong vòng 7 ngày kể từ ngày sinh nhật. Chúng tôi muốn ngày đặc biệt nhất của bạn trở nên ngọt ngào hơn với hương vị trà!</p>
<p>Ưu đãi sinh nhật áp dụng cho tất cả thành viên đã đăng ký tài khoản ít nhất 30 ngày trước ngày sinh nhật. Ly trà miễn phí có thể chọn bất kỳ loại nào trong menu, size M. Chúc bạn sinh nhật vui vẻ!</p>`,
  },
  {
    title: 'Giảm 20% Cho Mọi Đơn Hàng Đặt Qua App – Tiện Lợi Và Tiết Kiệm',
    subtitle: 'Tải app Mèo Trà ngay để nhận ưu đãi 20% cho mọi đơn hàng online',
    slug: 'giam-20-dat-qua-app-meo-tra',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800',
    isActive: true,
    content: `<h2>Đặt Qua App – Tiết Kiệm Thật Dễ!</h2>
<p>Ứng dụng Mèo Trà chính thức ra mắt với ưu đãi hấp dẫn: <strong>giảm 20%</strong> cho mọi đơn hàng đặt trực tuyến trong 3 tháng đầu. Ngoài ra, app còn cho phép bạn theo dõi đơn hàng real-time, tích điểm tự động và nhận thông báo ưu đãi sớm nhất.</p>
<p>App có sẵn trên App Store và Google Play. Sau khi tải về và đăng nhập, bạn sẽ nhận ngay một voucher 50k cho lần đặt hàng đầu tiên. Cài đặt ngay hôm nay!</p>`,
  },
  {
    title: 'Mua 5 Ly Tặng 1 Ly – Hội Bạn Thân Ghé Mèo Trà Ngay Thôi',
    subtitle: 'Càng đông người càng vui và càng tiết kiệm tại Mèo Trà',
    slug: 'mua-5-tang-1-hoi-ban-than',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800',
    isActive: true,
    content: `<h2>Hội Bạn Thân – Gọi Nhiều Lợi Nhiều!</h2>
<p>Chương trình <strong>Mua 5 Tặng 1</strong> dành cho những nhóm bạn thích tụ tập tại Mèo Trà. Cứ mỗi 5 ly đặt trong cùng 1 đơn hàng, bạn sẽ được tặng thêm 1 ly có giá thấp nhất trong đơn. Không giới hạn số lần áp dụng trong một lần ghé thăm.</p>
<p>Ưu đãi áp dụng cho đơn hàng tại quầy và đặt qua app. Đây là cơ hội tuyệt vời để rủ cả nhóm đến thưởng thức trà sữa mà không cần lo về ngân sách!</p>`,
  },
  {
    title: 'Ưu Đãi Học Sinh – Giảm 15% Mỗi Ngày Chỉ Cần Xuất Trình Thẻ Học Sinh',
    subtitle: 'Mèo Trà yêu trẻ em và muốn đồng hành cùng các bạn học sinh mỗi ngày',
    slug: 'uu-dai-hoc-sinh-giam-15-phan-tram',
    categorySlug: 'khuyen-mai',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800',
    isActive: true,
    content: `<h2>Dành Cho Học Sinh – Mỗi Ngày Đều Có Ưu Đãi!</h2>
<p>Mèo Trà vui lòng dành tặng ưu đãi <strong>giảm 15%</strong> cho tất cả học sinh (từ THCS đến THPT) khi xuất trình thẻ học sinh hoặc giấy tờ xác nhận còn đang đi học. Chương trình áp dụng mỗi ngày trong tuần học, tất cả các giờ hoạt động.</p>
<p>Chúng tôi hiểu rằng sau những giờ học căng thẳng, một ly trà sữa ngon là phần thưởng hoàn hảo. Hãy để Mèo Trà là người bạn đồng hành trong những năm tháng học sinh đẹp nhất của bạn!</p>`,
  },

  // ── HƯỚNG DẪN (thêm 8 bài) ───────────────────────────────────────────────
  {
    title: 'Chọn Mức Đường Nào Cho Đúng – Bí Quyết Từ Barista Mèo Trà',
    subtitle: 'Hướng dẫn chi tiết để chọn độ ngọt phù hợp với từng loại trà',
    slug: 'cach-chon-muc-duong-phu-hop-tung-loai-tra',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800',
    isActive: true,
    content: `<h2>Bí Quyết Chọn Độ Ngọt Chuẩn</h2>
<p>Mức đường trong trà sữa thường được ký hiệu từ 0% đến 100%. Nhưng không phải ai cũng biết rằng mỗi loại trà có mức đường "vàng" khác nhau. Với trà sữa đen truyền thống, 70% cho vị đậm đà hài hòa. Với matcha – vốn đã đắng – nên chọn 50-70% để cân bằng. Với trà trái cây, 30-50% đủ để giữ hương trái cây tươi tự nhiên.</p>
<p>Barista khuyên bạn nên bắt đầu với 50% ở lần đầu thử một loại trà mới, sau đó điều chỉnh dần theo khẩu vị. Đừng sợ hỏi barista để được tư vấn thêm – đó là việc chúng tôi rất vui được làm!</p>`,
  },
  {
    title: 'Hướng Dẫn Làm Trân Châu Đường Đen Tại Nhà Đúng Chuẩn Đài Loan',
    subtitle: 'Tự tay làm những viên trân châu dai mềm hoàn hảo với nguyên liệu đơn giản',
    slug: 'lam-tran-chau-duong-den-tai-nha-dung-chuan',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800',
    isActive: true,
    content: `<h2>Công Thức Trân Châu Đường Đen Chuẩn</h2>
<p>Nguyên liệu: 100g bột tapioca, 60ml nước đun sôi, 30g đường nâu. Trộn bột với nước sôi thành khối dẻo, thêm đường nâu và nhào đều. Vo thành viên nhỏ đường kính khoảng 1cm. Nấu trong nồi nước sôi 25-30 phút cho đến khi nổi lên mặt nước và bên trong không còn lõi trắng.</p>
<p>Ngâm trân châu vừa chín vào syrup đường đen (đường nâu + nước + một chút muối) trong 15 phút để thấm vị. Sử dụng ngay trong 4-6 tiếng – không nên để qua ngày vì trân châu sẽ cứng lại. Mẹo nhỏ: nếu trân châu bị dính, xoa nhẹ một chút bơ hoặc dầu ăn!</p>`,
  },
  {
    title: 'Cách Phân Biệt Matcha Thật Và Matcha Giả Trên Thị Trường',
    subtitle: 'Đừng để bị lừa bởi matcha kém chất lượng – đây là những dấu hiệu nhận biết',
    slug: 'phan-biet-matcha-that-va-matcha-gia',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800',
    isActive: true,
    content: `<h2>Matcha Thật Và Matcha Giả – Khác Biệt Như Thế Nào?</h2>
<p>Matcha thật có màu xanh tươi sáng, tươi như lá non. Nếu matcha có màu vàng xỉn, nâu nhạt hoặc xanh quá đậm có thể đã bị pha màu. Mùi của matcha thật rất thơm, thoáng mùi cỏ tươi và hơi ngai ngái đặc trưng. Matcha giả thường không có mùi hoặc mùi hóa chất nhân tạo.</p>
<p>Thử nghiệm đơn giản: hòa 1 thìa matcha với nước ấm và khuấy đều. Matcha thật sẽ tạo bọt mịn màu xanh, không bị lắng cặn. Matcha kém chất lượng thường lắng xuống đáy hoặc vón cục. Tại Mèo Trà, matcha được nhập trực tiếp từ Uji – có tem chứng nhận xuất xứ rõ ràng.</p>`,
  },
  {
    title: 'Bí Quyết Chọn Trà Ngon Cho Người Mới Bắt Đầu Yêu Trà',
    subtitle: 'Không biết bắt đầu từ đâu? Barista Mèo Trà sẽ giúp bạn chọn loại trà phù hợp',
    slug: 'bi-quyet-chon-tra-ngon-cho-nguoi-moi-bat-dau',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800',
    isActive: true,
    content: `<h2>Bắt Đầu Yêu Trà Từ Đâu?</h2>
<p>Nếu bạn chưa quen với vị đắng của trà, hãy bắt đầu với <strong>trà trái cây</strong> hoặc <strong>trà sữa taro</strong> – hai dòng có vị ngọt nhẹ nhàng, dễ uống. Với những ai muốn khám phá hương vị thuần trà, <strong>oolong</strong> là lựa chọn lý tưởng – vị trung gian giữa trà xanh và trà đen, thơm nhẹ và không quá đắng.</p>
<p>Người đã quen với cà phê sẽ dễ dàng thích nghi với trà đen Assam hoặc Ceylon – có vị mạnh, nồng đặc trưng. Với matcha, hãy thử dưới dạng latte (pha với sữa) trước khi uống matcha thuần để làm quen dần với vị đắng độc đáo của nó.</p>`,
  },
  {
    title: 'Bảo Quản Trà Khô Đúng Cách Để Giữ Hương Vị Tươi Nguyên Lâu Nhất',
    subtitle: 'Những sai lầm phổ biến khi bảo quản trà và cách khắc phục đúng chuẩn',
    slug: 'bao-quan-tra-kho-dung-cach-giu-huong-vi',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=800',
    isActive: true,
    content: `<h2>Bí Quyết Bảo Quản Trà Để Luôn Thơm Ngon</h2>
<p>Trà khô rất nhạy cảm với độ ẩm, ánh sáng và mùi lạ. Sai lầm phổ biến nhất là để trà trong lọ thủy tinh trong suốt trên bàn bếp – ánh sáng mặt trời sẽ làm mất hương vị chỉ sau vài tuần. Hãy bảo quản trà trong hộp kim loại kín, tối màu, đặt ở nơi thoáng mát và khô ráo.</p>
<p>Tuyệt đối không để trà gần các loại gia vị có mùi mạnh như cà phê, hành, tỏi vì trà dễ hấp thụ mùi xung quanh. Với matcha, cần bảo quản trong tủ lạnh sau khi mở gói và sử dụng trong vòng 2-3 tháng để đảm bảo màu sắc và hương vị tốt nhất.</p>`,
  },
  {
    title: 'Hướng Dẫn Pha Cold Brew Tea Hoàn Hảo – Ngon Hơn Trà Đá Thông Thường',
    subtitle: 'Phương pháp pha trà lạnh ngâm chậm giữ trọn hương thơm và giảm vị đắng',
    slug: 'pha-cold-brew-tea-hoan-hao',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=800',
    isActive: true,
    content: `<h2>Cold Brew Tea – Trà Ngâm Lạnh Thần Kỳ</h2>
<p>Cold brew tea (pha lạnh) khác hoàn toàn với trà đá thông thường (pha nóng rồi làm lạnh). Khi ngâm trong nước lạnh 8-12 tiếng, trà giải phóng các hợp chất thơm từ từ mà không kéo theo tannin – chất gây vị chát. Kết quả là một ly trà ngọt tự nhiên, thơm mềm và cực kỳ sảng khoái.</p>
<p>Công thức cơ bản: 1 thìa trà/200ml nước lạnh, ngâm 8-12 tiếng trong tủ lạnh. Trà oolong và trà xanh cho kết quả tuyệt vời nhất với phương pháp này. Bạn có thể thêm vài lát chanh, bạc hà hay gừng để tạo biến thể độc đáo cho riêng mình.</p>`,
  },
  {
    title: 'Tất Tần Tật Về Các Loại Topping Phổ Biến Trong Trà Sữa',
    subtitle: 'Mỗi loại topping có đặc điểm và cách kết hợp riêng – bạn đã biết hết chưa?',
    slug: 'tat-tan-tat-cac-loai-topping-tra-sua',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1557564654-f84a73e97dba?w=800',
    isActive: true,
    content: `<h2>Topping Nào Hợp Với Trà Gì?</h2>
<p><strong>Trân châu đen:</strong> Làm từ tinh bột sắn, vị ngọt nhẹ, dai mềm – phù hợp với hầu hết các loại trà sữa. <strong>Trân châu trắng:</strong> Mềm hơn và ít ngọt hơn trân châu đen, phù hợp với trà sữa nhẹ như oolong hoặc trà trắng. <strong>Thạch cà phê:</strong> Vị đắng nhẹ, giòn dai – kết hợp tuyệt vời với trà sữa matcha hoặc cà phê.</p>
<p><strong>Pudding trứng:</strong> Mềm mịn, béo ngậy – hoàn hảo với trà sữa đường đen hoặc trà sữa Hojicha. <strong>Nata de coco:</strong> Làm từ nước dừa lên men, giòn nhẹ và tươi mát – lý tưởng cho trà trái cây. <strong>Kem cheese:</strong> Lớp kem béo mặn phủ trên cùng – đặc biệt ngon với trà oolong hoặc trà đen Assam.</p>`,
  },
  {
    title: 'Công Thức Trà Sữa Đường Đen Chuẩn Vị Đài Loan Tại Nhà',
    subtitle: 'Tái tạo hương vị trà sữa đường đen nổi tiếng ngay tại bếp nhà bạn',
    slug: 'cong-thuc-tra-sua-duong-den-chuan-vi-dai-loan',
    categorySlug: 'huong-dan',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800',
    isActive: true,
    content: `<h2>Bí Quyết Trà Sữa Đường Đen Đúng Điệu</h2>
<p>Nguyên liệu: Trà Assam pha đặc (200ml), sữa tươi nguyên kem (100ml), đường đen brown sugar (3 thìa), trân châu đường đen (đã nấu), đá. Đầu tiên, đun chảy đường đen với 1 thìa nước thành syrup sệt, phết lên thành ly theo kiểu xoáy ốc để tạo vân đẹp.</p>
<p>Cho đá vào ly, đổ sữa lạnh, rồi rót trà đen lên từ từ để tạo lớp gradient đẹp. Thêm trân châu đường đen đã ngâm syrup. Khuấy đều trước khi uống để hòa quyện mọi hương vị. Bí quyết: trà Assam phải pha đặc gấp đôi bình thường để không bị loãng khi thêm sữa và đá.</p>`,
  },

  // ── SỨC KHỎE (thêm 8 bài) ────────────────────────────────────────────────
  {
    title: 'Trà Oolong Và Những Lợi Ích Tuyệt Vời Cho Hệ Tiêu Hóa',
    subtitle: 'Khoa học đã chứng minh: uống trà oolong đúng cách giúp hệ tiêu hóa khỏe mạnh hơn',
    slug: 'tra-oolong-loi-ich-cho-he-tieu-hoa',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800',
    isActive: true,
    content: `<h2>Oolong – Người Bạn Của Hệ Tiêu Hóa</h2>
<p>Nghiên cứu từ Đại học Osaka (Nhật Bản) cho thấy uống 2-3 tách trà oolong mỗi ngày giúp cải thiện đáng kể hệ tiêu hóa. Các polyphenol trong oolong kích thích hoạt động của enzyme tiêu hóa, giúp cơ thể phân giải thức ăn hiệu quả hơn, đặc biệt là chất béo.</p>
<p>Ngoài ra, oolong còn có tác dụng prebiotic – nuôi dưỡng vi khuẩn có lợi trong đường ruột. Để tận dụng tối đa lợi ích này, hãy uống trà oolong 30 phút sau bữa ăn, không uống khi bụng đói và tránh thêm quá nhiều đường sẽ làm giảm tác dụng tích cực.</p>`,
  },
  {
    title: 'Trà Xanh Có Thực Sự Giúp Giảm Cân? Sự Thật Từ Khoa Học',
    subtitle: 'Giải đáp câu hỏi muôn thuở về mối quan hệ giữa trà xanh và việc giảm cân',
    slug: 'tra-xanh-giam-can-su-that-khoa-hoc',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800',
    isActive: true,
    content: `<h2>Trà Xanh Và Giảm Cân – Thật Hay Giả?</h2>
<p>Câu trả lời là: <strong>có, nhưng không thần kỳ như quảng cáo</strong>. EGCG (epigallocatechin gallate) trong trà xanh thực sự giúp tăng tốc độ trao đổi chất từ 3-4% và tăng quá trình đốt mỡ khoảng 10-17%. Tuy nhiên, đây chỉ là hiệu ứng hỗ trợ – không thể thay thế chế độ ăn lành mạnh và tập luyện.</p>
<p>Để trà xanh phát huy tác dụng tối ưu, hãy uống 3-5 tách/ngày (không thêm đường), uống vào buổi sáng trước bữa ăn và trước khi tập thể dục. Kết hợp với lối sống năng động, trà xanh có thể là đồng minh đáng tin cậy trong hành trình quản lý cân nặng của bạn.</p>`,
  },
  {
    title: 'L-Theanine – Bí Mật Giúp Trà Tăng Cường Trí Nhớ Và Sự Tập Trung',
    subtitle: 'Hiểu về hợp chất thần kỳ chỉ có trong trà và cách nó tác động lên não bộ',
    slug: 'l-theanine-tang-cuong-tri-nho-tap-trung',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800',
    isActive: true,
    content: `<h2>L-Theanine – Amino Acid Độc Đáo Của Trà</h2>
<p>L-theanine là amino acid chỉ tìm thấy tự nhiên trong lá trà (và một số loại nấm). Hợp chất này có khả năng vượt qua hàng rào máu não và tăng sản xuất sóng alpha – dạng sóng não liên quan đến trạng thái tập trung bình tĩnh, sáng tạo và thư giãn mà không buồn ngủ.</p>
<p>Khi kết hợp với caffeine tự nhiên trong trà (ở tỷ lệ thường thấy trong lá trà), L-theanine tạo ra hiệu ứng "tập trung thoải mái" – khác hoàn toàn với cảm giác bồn chồn của cà phê. Đó là lý do các học giả, thiền sinh và người làm sáng tạo Nhật Bản truyền đời uống trà trong lúc làm việc tư duy.</p>`,
  },
  {
    title: 'Trà Hoa Cúc Và Những Lợi Ích Bất Ngờ Cho Giấc Ngủ Sâu',
    subtitle: 'Một tách trà hoa cúc trước khi ngủ có thể thay đổi chất lượng giấc ngủ của bạn',
    slug: 'tra-hoa-cuc-loi-ich-cho-giac-ngu-sau',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800',
    isActive: true,
    content: `<h2>Trà Hoa Cúc – Giải Pháp Tự Nhiên Cho Giấc Ngủ Ngon</h2>
<p>Trà hoa cúc (chamomile) chứa apigenin – một chất chống oxy hóa gắn kết với các thụ thể trong não có tác dụng thư giãn thần kinh và giảm lo lắng. Đây là cơ chế khoa học giải thích vì sao người uống trà hoa cúc trước ngủ thường dễ chìm vào giấc ngủ và ngủ sâu hơn.</p>
<p>Để đạt hiệu quả tốt nhất, hãy pha một tách trà hoa cúc ấm khoảng 45 phút trước khi đi ngủ, không thêm đường. Trà hoa cúc không chứa caffeine nên hoàn toàn an toàn để uống buổi tối. Đây cũng là loại trà an toàn cho phụ nữ mang thai (sau tháng thứ nhất) và trẻ em trên 5 tuổi.</p>`,
  },
  {
    title: 'Caffeine Trong Trà Và Cà Phê – Loại Nào Tốt Hơn Cho Bạn?',
    subtitle: 'Phân tích khoa học về sự khác biệt giữa caffeine trong trà và trong cà phê',
    slug: 'caffeine-trong-tra-va-ca-phe-loai-nao-tot-hon',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    isActive: true,
    content: `<h2>Trà Hay Cà Phê – Câu Hỏi Của Triệu Người</h2>
<p>Một tách trà đen chứa 40-70mg caffeine, trong khi một tách cà phê chứa 80-200mg. Tuy nhiên, điều quan trọng hơn không phải lượng caffeine mà là <em>cách cơ thể xử lý</em> nó. Caffeine trong trà được hấp thụ chậm hơn nhờ tannin và L-theanine, tạo ra năng lượng ổn định, kéo dài 4-6 tiếng mà không gây đỉnh và vực năng lượng đột ngột.</p>
<p>Caffeine cà phê hấp thụ nhanh hơn, cho năng lượng mạnh trong 1-2 tiếng rồi giảm dần, đôi khi gây bồn chồn, lo lắng hoặc tim đập nhanh ở người nhạy cảm. Nếu bạn cần năng lượng ổn định cả ngày mà không muốn ảnh hưởng đến giấc ngủ – trà là lựa chọn thông minh hơn.</p>`,
  },
  {
    title: 'Uống Trà Đen Mỗi Ngày – Bí Quyết Bảo Vệ Sức Khỏe Tim Mạch',
    subtitle: 'Nghiên cứu mới nhất về mối liên hệ tích cực giữa trà đen và hệ tim mạch',
    slug: 'uong-tra-den-bao-ve-suc-khoe-tim-mach',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=800',
    isActive: true,
    content: `<h2>Trà Đen – Người Bảo Vệ Trái Tim</h2>
<p>Nghiên cứu công bố trên tạp chí European Journal of Preventive Cardiology (2022) theo dõi 498.000 người trong vòng 11 năm cho thấy: uống 2-3 tách trà đen mỗi ngày giảm 12% nguy cơ bệnh tim mạch và 23% nguy cơ tử vong do đột quỵ so với người không uống trà.</p>
<p>Cơ chế chính: flavonoid trong trà đen giúp giảm LDL cholesterol xấu, cải thiện chức năng lớp nội mô mạch máu và giảm huyết áp nhẹ. Để tận dụng tối đa, uống trà đen không đường, không sữa sẽ cho hiệu quả cao nhất. Nhớ không uống khi bụng đói để tránh kích ứng dạ dày.</p>`,
  },
  {
    title: 'Antioxidants Trong Trà – Vũ Khí Tự Nhiên Chống Lão Hóa Hiệu Quả',
    subtitle: 'Khám phá sức mạnh chống oxy hóa mạnh mẽ tiềm ẩn trong mỗi tách trà',
    slug: 'antioxidants-trong-tra-chong-lao-hoa-hieu-qua',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1562547256-2c5ee990e6d8?w=800',
    isActive: true,
    content: `<h2>Trà – Kho Chất Chống Oxy Hóa Tự Nhiên</h2>
<p>Trà (đặc biệt là trà xanh và matcha) chứa hàm lượng catechin – một nhóm chất chống oxy hóa cực kỳ mạnh. EGCG trong matcha có khả năng trung hòa gốc tự do cao gấp 100 lần vitamin C và gấp 25 lần vitamin E. Gốc tự do là thủ phạm chính gây lão hóa tế bào và các bệnh mãn tính.</p>
<p>Uống trà đều đặn giúp bảo vệ tế bào da khỏi tác hại của UV, làm chậm quá trình lão hóa da từ bên trong và giảm nguy cơ ung thư. Đây là lý do phụ nữ Nhật Bản nổi tiếng với làn da đẹp và tuổi thọ cao – văn hóa uống trà xanh hàng ngày đóng vai trò không nhỏ!</p>`,
  },
  {
    title: 'Uống Trà Vào Lúc Nào Trong Ngày Là Tốt Nhất Cho Sức Khỏe?',
    subtitle: 'Thời điểm uống trà ảnh hưởng rất lớn đến hiệu quả hấp thụ dưỡng chất',
    slug: 'thoi-diem-uong-tra-tot-nhat-cho-suc-khoe',
    categorySlug: 'suc-khoe',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
    isActive: true,
    content: `<h2>Khung Giờ Vàng Để Uống Trà</h2>
<p>Buổi sáng (8:00-10:00): Đây là thời điểm tốt nhất để uống trà xanh hoặc trà đen. Cortisol trong cơ thể đã giảm dần sau đỉnh buổi sáng sớm, trà lúc này sẽ cho năng lượng hiệu quả nhất mà không ảnh hưởng đến nhịp sinh học. Tuyệt đối không uống ngay khi mới thức dậy vì dạ dày còn rỗng.</p>
<p>Buổi trưa (13:00-14:00): Một tách trà sau bữa trưa giúp tiêu hóa và tránh cơn buồn ngủ sau khi ăn. Buổi chiều (15:00-17:00): Thời điểm lý tưởng để thưởng thức trà với bạn bè hoặc đồng nghiệp. Tuyệt đối tránh uống trà sau 19:00 vì caffeine có thể ảnh hưởng đến giấc ngủ của bạn.</p>`,
  },

  // ── CÂU CHUYỆN (thêm 7 bài) ──────────────────────────────────────────────
  {
    title: 'Chú Mèo Boba – Linh Vật Đặc Biệt Và Trái Tim Của Mèo Trà',
    subtitle: 'Câu chuyện về chú mèo mang lại may mắn và truyền cảm hứng cho thương hiệu',
    slug: 'chu-meo-boba-linh-vat-trai-tim-meo-tra',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800',
    isActive: true,
    content: `<h2>Boba – Chú Mèo Đã Thay Đổi Tất Cả</h2>
<p>Năm 2021, người sáng lập Mèo Trà nhận nuôi một chú mèo mướp hoang bị bỏ rơi trước cửa nhà và đặt tên là Boba. Điều kỳ lạ là chỉ vài tháng sau khi Boba đến, ý tưởng về Mèo Trà bắt đầu thành hình. Những đặc tính của Boba – tò mò, tinh nghịch nhưng ấm áp và thân thiện – trở thành nguồn cảm hứng cho cá tính thương hiệu.</p>
<p>Ngày nay, Boba vẫn sống tại cửa hàng đầu tiên ở Quận 3 và là "nhân viên" được yêu thích nhất. Mỗi ngày, hàng chục khách hàng đến chụp ảnh với Boba và chia sẻ lên mạng xã hội. Chú mèo nhỏ vô tình trở thành đại sứ thương hiệu không chính thức!</p>`,
  },
  {
    title: 'Hành Trình 7 Ngày Khám Phá Vùng Trà Đài Loan Của Mèo Trà',
    subtitle: 'Chúng tôi đã vượt ngàn dặm để tìm về nguồn gốc của những ly trà tuyệt hảo nhất',
    slug: 'hanh-trinh-7-ngay-kham-pha-vung-tra-dai-loan',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?w=800',
    isActive: true,
    content: `<h2>Đến Tận Nơi Để Hiểu Cây Trà</h2>
<p>Tháng 3 vừa qua, đội ngũ nghiên cứu và phát triển của Mèo Trà có chuyến đi 7 ngày đến các vùng trà nổi tiếng của Đài Loan: Alishan, Sun Moon Lake và Nantou. Chúng tôi đã tận tay hái trà, quan sát quy trình chế biến và làm việc trực tiếp với các nghệ nhân trà lâu năm.</p>
<p>Chuyến đi không chỉ giúp chúng tôi lựa chọn được nguồn trà tốt hơn mà còn mang về những bí quyết pha chế độc đáo mà các nghệ nhân Đài Loan sẵn lòng chia sẻ. Một số công thức mới trong menu sắp ra mắt chính là "quà" từ chuyến hành trình đáng nhớ này.</p>`,
  },
  {
    title: 'Khách Hàng Kể Chuyện – Những Kỷ Niệm Ngọt Ngào Tại Mèo Trà',
    subtitle: 'Hơn 50 khách hàng chia sẻ câu chuyện của họ – những khoảnh khắc không thể quên',
    slug: 'khach-hang-ke-chuyen-ky-niem-ngot-ngao',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1522776851755-3914469557f0?w=800',
    isActive: true,
    content: `<h2>Những Câu Chuyện Làm Chúng Tôi Xúc Động</h2>
<p>Nhân kỷ niệm 2 năm thành lập, Mèo Trà tổ chức chương trình "Kể Chuyện Mèo Trà" – nơi khách hàng chia sẻ kỷ niệm của họ tại cửa hàng. Chúng tôi nhận được hơn 500 câu chuyện, từ buổi hẹn hò đầu tiên bên ly trà sữa matcha, đến khoảnh khắc bạn bè tụ họp sau nhiều năm xa cách, đến cả câu chuyện về một người mẹ lần đầu dẫn con nhỏ đến thưởng thức trà sữa.</p>
<p>"Mèo Trà là nơi con tôi lần đầu tiên nói 'con yêu mẹ' trước mặt bạn bè" – câu chuyện của chị Lan (35 tuổi, Quận 7) đã khiến cả đội ngũ Mèo Trà rơi nước mắt. Những câu chuyện như thế nhắc nhở chúng tôi rằng mỗi ly trà không chỉ là đồ uống – đó là một phần của cuộc sống.</p>`,
  },
  {
    title: 'Từ Đam Mê Đến Thương Hiệu – Câu Chuyện Sáng Lập Mèo Trà Chưa Được Kể',
    subtitle: 'Hành trình đầy thử thách từ ý tưởng ban đầu đến việc xây dựng thương hiệu trà sữa được yêu thích',
    slug: 'tu-dam-me-den-thuong-hieu-cau-chuyen-sang-lap',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800',
    isActive: true,
    content: `<h2>Khởi Đầu Từ Một Đam Mê Đơn Giản</h2>
<p>Năm 2020, trong giai đoạn giãn cách xã hội, người sáng lập Mèo Trà – một kỹ sư phần mềm – bắt đầu pha trà sữa tại nhà để giải khuây. Từ việc thử nghiệm hàng trăm công thức, anh nhận ra rằng việc tạo ra một ly trà ngon không chỉ là kỹ thuật mà còn là nghệ thuật và tình yêu.</p>
<p>Sau 18 tháng pha chế, nghiên cứu và gặp gỡ các chuyên gia trà, Mèo Trà chính thức khai trương vào tháng 3/2022 với số vốn khởi đầu vỏn vẹn 80 triệu đồng. Ba tháng đầu lỗ liên tiếp, nhưng tháng thứ 4 bỗng có một đoàn khách review trên TikTok và mọi thứ bắt đầu thay đổi từ đó.</p>`,
  },
  {
    title: 'Mèo Trà Và Sứ Mệnh Vì Mèo Hoang – 1% Doanh Thu Cho Cộng Đồng Mèo',
    subtitle: 'Cách Mèo Trà lan tỏa tình yêu với mèo thông qua hành động thiết thực',
    slug: 'meo-tra-suc-menh-vi-meo-hoang-cong-dong',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
    isActive: true,
    content: `<h2>Tình Yêu Với Mèo Không Chỉ Là Biểu Tượng</h2>
<p>Từ khi thành lập, Mèo Trà cam kết dành <strong>1% doanh thu hàng tháng</strong> cho Saigon Cat Shelter – tổ chức phi lợi nhuận chuyên giải cứu, chữa bệnh và tìm nhà cho mèo hoang tại TP.HCM. Đến nay, Mèo Trà đã đóng góp được hơn 45 triệu đồng, giúp chăm sóc và tìm nhà cho gần 300 chú mèo.</p>
<p>Mỗi khi bạn uống một ly trà tại Mèo Trà, bạn đang gián tiếp giúp đỡ một chú mèo hoang nào đó có cuộc sống tốt hơn. Đây là điều chúng tôi tự hào nhất – tình yêu với mèo không chỉ là logo hay biểu tượng, mà là hành động cụ thể mỗi ngày.</p>`,
  },
  {
    title: 'Người Barista 10 Năm Và Câu Chuyện Tình Yêu Vô Bờ Với Trà',
    subtitle: 'Gặp gỡ anh Minh – barista kỳ cựu 10 năm kinh nghiệm và những bí quyết không tưởng',
    slug: 'barista-10-nam-tinh-yeu-vo-bo-voi-tra',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
    isActive: true,
    content: `<h2>Anh Minh – Barista Huyền Thoại Của Mèo Trà</h2>
<p>Anh Nguyễn Thành Minh (42 tuổi) là người barista có kinh nghiệm lâu năm nhất tại Mèo Trà. Trước khi gia nhập đội ngũ, anh đã làm việc tại các quán trà danh tiếng ở Đài Loan và Singapore trong suốt 7 năm. Anh có khả năng đặc biệt: chỉ nhìn màu sắc và mùi hương của lá trà, anh có thể đoán được thời điểm thu hoạch và vùng trồng trà.</p>
<p>"Trà giống như con người – mỗi mẻ trà từ cùng một vườn nhưng thu hoạch khác mùa lại có tính cách hoàn toàn khác. Nhiệm vụ của barista là hiểu và tôn trọng tính cách đó, rồi giúp nó thể hiện vẻ đẹp tốt nhất trong từng ly trà," anh Minh chia sẻ.</p>`,
  },
  {
    title: 'Những Khoảnh Khắc Đặc Biệt Mà Khách Hàng Tạo Ra Tại Mèo Trà',
    subtitle: 'Từ lời cầu hôn đến tiệc thôi nôi – Mèo Trà đã chứng kiến bao điều ý nghĩa',
    slug: 'nhung-khoanh-khac-dac-biet-tai-meo-tra',
    categorySlug: 'cau-chuyen',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    isActive: true,
    content: `<h2>Mèo Trà – Nơi Lưu Giữ Kỷ Niệm</h2>
<p>Chúng tôi không ngờ rằng một quán trà nhỏ lại trở thành nơi diễn ra nhiều khoảnh khắc đặc biệt đến vậy. Chỉ riêng năm 2023, Mèo Trà đã chứng kiến 12 lời cầu hôn (tất cả đều được nhận lời!), 3 buổi tiệc thôi nôi mini và vô số cuộc họp mặt bạn bè, gia đình sau nhiều năm xa cách.</p>
<p>Bạn Trúc (26 tuổi, Quận 1) chia sẻ: "Anh ấy đã giấu nhẫn cầu hôn trong ly trà sữa của tôi. Tôi hét lên vì tưởng bị thêm topping lạ, rồi khóc, rồi cười – tất cả trong vòng 10 giây. Cả quán vỗ tay!" Những khoảnh khắc như thế là lý do chúng tôi yêu công việc này mỗi ngày.</p>`,
  },
];

// ─── Categories ───────────────────────────────────────────────────────────────

export const categoryData = [
  { name: 'Trà Sữa',      slug: 'tra-sua',       icon: '🧋', color: '#F48FB1', sortOrder: 1 },
  { name: 'Trà Trái Cây', slug: 'tra-trai-cay',  icon: '🍓', color: '#F06292', sortOrder: 2 },
  { name: 'Cà Phê',       slug: 'ca-phe',         icon: '☕', color: '#A1887F', sortOrder: 3 },
  { name: 'Đặc Biệt',     slug: 'dac-biet',       icon: '✨', color: '#CE93D8', sortOrder: 4 },
  { name: 'Topping',      slug: 'topping',        icon: '🔮', color: '#80DEEA', sortOrder: 5 },
];

// ─── Shared defaults ──────────────────────────────────────────────────────────

const ALL_TOPPINGS = [
  { name: 'Trân châu đen',   price: 5000, sortOrder: 1 },
  { name: 'Trân châu trắng', price: 5000, sortOrder: 2 },
  { name: 'Thạch cà phê',    price: 5000, sortOrder: 3 },
  { name: 'Pudding trứng',   price: 7000, sortOrder: 4 },
  { name: 'Nata de coco',    price: 5000, sortOrder: 5 },
  { name: 'Kem cheese',      price: 8000, sortOrder: 6 },
];

const FRUIT_TOPPINGS = [
  { name: 'Trân châu đen', price: 5000, sortOrder: 1 },
  { name: 'Thạch cà phê',  price: 5000, sortOrder: 2 },
  { name: 'Nata de coco',  price: 5000, sortOrder: 3 },
];

const LYCHEE_TOPPINGS = [
  { name: 'Trân châu đen', price: 5000, sortOrder: 1 },
  { name: 'Nata de coco',  price: 5000, sortOrder: 2 },
];

const COFFEE_TOPPINGS = [
  { name: 'Pudding trứng', price: 7000, sortOrder: 1 },
  { name: 'Kem cheese',    price: 8000, sortOrder: 2 },
];

const DEFAULT_SIZES = [
  { sizeCode: 'M', name: 'Vừa (M) – 500ml', priceModifier: 0,    sortOrder: 1 },
  { sizeCode: 'L', name: 'Lớn (L) – 700ml', priceModifier: 7000, sortOrder: 2 },
];

const DEFAULT_SWEETNESS = [0, 30, 50, 70, 100];
const DEFAULT_ICE       = ['Không đá', 'Ít đá', 'Bình thường', 'Nhiều đá'];

// ─── Products ─────────────────────────────────────────────────────────────────

export const productData = [
  // ── Trà Sữa ──────────────────────────────────────────────────────────────
  {
    name:            'Trà Sữa Trân Châu Đen',
    slug:            'tra-sua-tran-chau-den',
    categorySlug:    'tra-sua',
    price:           45000,
    description:     'Trà sữa thơm ngon kết hợp cùng trân châu đen dai mềm. Vị trà đậm đà, sữa béo ngậy – món uống kinh điển không thể thiếu.',
    rating:          4.8,
    reviews:         256,
    isBestseller:    true,
    isNew:           false,
    tags:            ['bestseller', 'classic'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       1,
  },
  {
    name:            'Trà Sữa Matcha Nhật',
    slug:            'tra-sua-matcha-nhat',
    categorySlug:    'tra-sua',
    price:           52000,
    description:     'Matcha Nhật Bản thượng hạng pha cùng sữa tươi tạo nên hương vị đắng ngọt tinh tế, thơm mùi trà xanh đặc trưng.',
    rating:          4.9,
    reviews:         180,
    isBestseller:    true,
    isNew:           false,
    tags:            ['bestseller', 'premium'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       2,
  },
  {
    name:            'Trà Sữa Oolong Kem Cheese',
    slug:            'tra-sua-oolong-kem-cheese',
    categorySlug:    'tra-sua',
    price:           58000,
    description:     'Trà Oolong thanh thoát bên dưới, lớp kem cheese béo mịn phủ bên trên. Kết hợp hoàn hảo giữa đắng và béo.',
    rating:          4.7,
    reviews:         142,
    isBestseller:    false,
    isNew:           true,
    tags:            ['new', 'trending'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       3,
  },
  {
    name:            'Trà Sữa Taro Khoai Môn',
    slug:            'tra-sua-taro-khoai-mon',
    categorySlug:    'tra-sua',
    price:           49000,
    description:     'Khoai môn Taro mịn màng quyện cùng sữa tươi tạo nên màu tím đặc trưng và vị ngọt béo tự nhiên.',
    rating:          4.7,
    reviews:         167,
    isBestseller:    false,
    isNew:           false,
    tags:            ['popular'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       4,
  },

  // ── Trà Trái Cây ─────────────────────────────────────────────────────────
  {
    name:            'Trà Đào Cam Sả',
    slug:            'tra-dao-cam-sa',
    categorySlug:    'tra-trai-cay',
    price:           48000,
    description:     'Hương đào ngọt ngào kết hợp cam tươi và sả thơm tạo nên thức uống giải nhiệt cực kỳ sảng khoái.',
    rating:          4.6,
    reviews:         210,
    isBestseller:    false,
    isNew:           false,
    tags:            ['fruity', 'refreshing'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        FRUIT_TOPPINGS,
    sortOrder:       5,
  },
  {
    name:            'Trà Vải Lychee Soda',
    slug:            'tra-vai-lychee-soda',
    categorySlug:    'tra-trai-cay',
    price:           50000,
    description:     'Vải thiều tươi ngọt kết hợp soda tạo nên bong bóng vui mắt, thanh mát và thơm ngát hương vải.',
    rating:          4.5,
    reviews:         98,
    isBestseller:    false,
    isNew:           true,
    tags:            ['new', 'fruity'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        LYCHEE_TOPPINGS,
    sortOrder:       6,
  },

  // ── Cà Phê ───────────────────────────────────────────────────────────────
  {
    name:            'Bạc Xỉu Đặc Biệt',
    slug:            'bac-xiu-dac-biet',
    categorySlug:    'ca-phe',
    price:           40000,
    description:     'Cà phê phin truyền thống pha cùng sữa đặc và sữa tươi, ngọt nhẹ thơm ngon theo phong cách Sài Gòn.',
    rating:          4.8,
    reviews:         320,
    isBestseller:    true,
    isNew:           false,
    tags:            ['bestseller', 'classic'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        COFFEE_TOPPINGS,
    sortOrder:       7,
  },

  // ── Đặc Biệt ─────────────────────────────────────────────────────────────
  {
    name:            'Mèo Trà Đặc Biệt',
    slug:            'meo-tra-dac-biet',
    categorySlug:    'dac-biet',
    price:           65000,
    description:     'Thức uống signature của Mèo Trà – pha trộn bí quyết từ trà đặc biệt, kem tươi và topping siêu phẩm. Chỉ có tại Mèo Trà!',
    rating:          5.0,
    reviews:         89,
    isBestseller:    true,
    isNew:           true,
    tags:            ['signature', 'special'],
    sweetnessLevels: DEFAULT_SWEETNESS,
    iceLevels:       DEFAULT_ICE,
    sizes:           DEFAULT_SIZES,
    toppings:        ALL_TOPPINGS,
    sortOrder:       8,
  },
];
