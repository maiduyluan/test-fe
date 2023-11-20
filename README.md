<!-- 
pages: chứa 2 page là home và detail , home hiển thị các blog user, detail hiện chi tiết blog của user
modules: chứa những component thuộc page đó
features: active (  state các nút bấm ) , blog ( state filter blog và user id , blogData dùng thunk để call api cho home để xử lý và đặt cờ khi dùng infinitscroll ), service dùng để call Api
constants: dùng để khai báo các biến (vd như tạo object button để map ra)
components: dùng để tạo những component cần sài ở nhiều nơi

1.Home InfiniteScroll gọi hàm loadMore ( truyền page từ thuộc tính pageStart ) 
-> Kiểm tra nếu isFullList là false thì dispatch tới action fetchListDataPaging trong blogData
-> fetchListDataPaging nhận được page và gọi api, khi nhận được res và lưu vào state, list sẽ bao gồm data cũ( nếu có ) và data mới - isFullList sẽ trở thành true khi lần call cuối cùng không còn phần tử nào ở trong mảng trả về
-> Gán list vào data bằng useSelector
-> Tạo biến dataRender để gán các các data đã được lọc
-> Render 

2.Bấm vào Sort thì set state toggleSort thành true , hiển thị 2 nút sort name và sort like
-> Chọn nút nào thì nút đó sẽ set state typeBlog thành 'name' hoặc 'like' để so sánh đồng thời set lại state toggleSort thành false để ẩn đi

3. Bấm vào các nút category, khi state typeBlog là 'All' thì sẽ render hết data, nếu ngược lại thì so sánh name button với title của data

4. Click vào biểu tượng like thì set id đó vào state activeLike và update api
-> Tạo biến isChecked để kiểm tra nếu tồn tại id đó trong mảng thì trả về mảng mới mà không có id đó (nếu chưa thì thêm vào)
-> Tạo biến increasedLike để kiểm thay đổi UI, nếu có active thì render increasedLike và ngược lại

5. Click vào ảnh sẽ đi đến trang Detail và dispatch tới actio fecthUserData trong BlogData
-> fetchUserData nhận được id và gọi api, khi nhận được res thì lưu vào userData, lấy state userData ra và render 

6. Bấm vào nút comment thì set state toggleForm thành true để hiển thị và ngược lại

7.Thêm mới user vào db, socket emit  client-have-new-blog truyền data xuống client , sau khi client nhận được thì dispatch tới action setNewBlog và set lại state list = list cũ(nếu có), data

Tech: HTML, CSS , ReactJS, Redux toolkit, Node & Express, MySQL, Socket.io
 -->