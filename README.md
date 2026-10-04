# Lab 08 - BMI Calculator

Sinh viên: **Nguyễn Anh Tuấn**  
MSSV: **23IT297**  
Lớp: **23SE2**  

---

## 1. Mục tiêu Lab
Xây dựng ứng dụng tính chỉ số khối cơ thể (BMI Calculator) với giao diện người dùng hiện đại, xử lý dữ liệu nhập (chiều cao, cân nặng, độ tuổi), validate dữ liệu an toàn và hiển thị kết quả phân loại chuẩn y tế.

## 2. Công thức tính BMI
$$BMI = \frac{\text{Weight (kg)}}{(\text{Height (m)})^2}$$

Trong đó:
$$\text{Height (m)} = \frac{\text{Height (cm)}}{100}$$

### Bảng phân loại chỉ số BMI:
- **BMI < 18.5**: `Underweight` (Thiếu cân)
- **18.5 <= BMI < 25**: `Normal` (Bình thường / Chuẩn)
- **25 <= BMI < 30**: `Overweight` (Thừa cân)
- **BMI >= 30**: `Obese` (Béo phì)

## 3. Công nghệ sử dụng
- **React Native** (v0.86.3)
- **TypeScript**
- **Expo SDK** (~57.0.25)
- **Expo Status Bar**
- React Hooks: `useState`
- Các component cơ bản: `View`, `Text`, `TextInput`, `ScrollView`, `Pressable`, `KeyboardAvoidingView`, `StyleSheet`

## 4. Chức năng chính
- Lựa chọn giới tính tương tác: **Male** (♂) và **Female** (♀) với viền Sky Blue nổi bật khi chọn.
- Nhập chiều cao (`cm`), cân nặng (`kg`) và tuổi (`years`) bằng bàn phím số chuyên dụng (`keyboardType="numeric"`).
- Xử lý validation dữ liệu chặt chẽ:
  - Ngăn chặn nhập rỗng, số âm hoặc số bằng 0.
  - Tuyệt đối không để xảy ra crash, không hiển thị `NaN` hay `Infinity`.
  - Hiển thị hộp thông báo lỗi trực quan ngay trên giao diện nếu dữ liệu không hợp lệ.
- Màn hình kết quả (`Your Result`) chuyên nghiệp:
  - Badge phân loại trạng thái có màu sắc tương ứng (`Normal` - Xanh lá, `Underweight` - Xanh dương, `Overweight` - Hổ phách, `Obese` - Đỏ).
  - Điểm số BMI lớn được làm tròn 1 chữ số thập phân.
  - Dải giá trị chuẩn tham khảo (`18.5 - 24.9 kg/m²`).
  - Lời khuyên sức khỏe phù hợp theo từng mức thể trạng.
  - Nút **CALCULATE AGAIN** đưa người dùng trở lại màn hình nhập liệu để tiếp tục tính toán.

## 5. Cách chạy project

### Cài đặt dependencies:
```bash
npm install
```

### Khởi chạy ứng dụng:
```bash
npx expo start
```

- Nhấn phím `a` trên terminal để mở trực tiếp trên **Android Emulator**.
- Hoặc quét mã QR qua ứng dụng **Expo Go** trên thiết bị thật.
"# Lab3_Dicee" 
