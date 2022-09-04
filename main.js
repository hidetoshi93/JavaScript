// khai bao bien
/**
 * Built-in function
 * 1. Alert
 * 2. Console
 * 3. Confirm
 * 4. Prompt
 * 5. Set timeout
 * 6. Set interval
 */


/**
 * Toán tử trong javascript
 * 1. Toán tử số học
 * 2. Toán từ gắn
 * 3. Toán tử so sánh
 * 4. Toán tử logic
 */


// var a = 1;
// var b = -1;
// var c = 0;
// var d = 0;
// var e = a <= b;
// var f = c == d;
// var g = a >= c;
// console.log(e, f, g)

/**
 * Kiểu dữ liệu trong Javascript
 * 
 * 1. Kiểu dữ liệu nguyên thủy - Primitive Data
 *  - Number
 *  - String
 *  - Boolean
 *  - Undefined
 *  - Null
 *  - Symbol
 * 
 * 2. Kiểu dữ liệu phức tạp - Compex Data
 *  - Function
 *  - Object
 */


/**
 * Tham số hàm
 * 
 * 1. Tham số?
 *  - Định nghĩa
 *  - Kiểu dữ liệu
 *  - Tính private
 *  - 1 tham số
 *  - Nhiều tham số
 * 
 * 2. Truyền tham số?
 *  - 1 tham số
 *  - Nhiều tham số
 * 
 * 3. Agurments?
 *  - Đối tượng agurments
 *  - Giới thiệu vòng for
 */


/**
 * HTML DOM (Document Of Model)
 * 
 * Có 3 thành phần:
 *  1. Element
 *  2. Atrribute
 *  3. Text
 * 
 * --------------------------------------
 * 
 * Javascript: Browser | Server
 * Browser: HTML -> DOM -> Web API
 * 
 * 
 */

//  Array.prototype.myMap = function(cb) {
//     var cbLength = this.length;
//     var resutl = [];
//     for (var i = 0; i < cbLength; i++){
//         resutl.push(cb(this[i], i))
//     }
//     return resutl;
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number, index) {
//     return number*index
// })) // Output: [2, 4, 6]

/**
 * Promise
 * 
 * 1. Pending: trạng thái chờ
 * 2. Fullfilled: Thành công
 * 3. Reject: Thất bại
 * 
 */

// var promise = new Promise(
//     // Excutor
//     function(resolve, reject){
//         // Logic
//         // Thành công: resolve()
//         // Thất bại: reject() 

//     }
// )

// promise
//     .then(function() {
//         console.log('Successfully!')
//     })

//     .catch(function() {
//         console.log('Failture!')
//     })

//     .finally(function() {
//         console.log('Done!')
//     })

var users = [
    {
        id: 1,
        name: 'Kien Dam',
    },
    {
        id: 2,
        name: 'Son Dang',
    },
    {
        id: 3,
        name: 'Hung Dam',
    }
]

var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Chua ra video anh oi'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Anh ra roi ma'
    },
    {
        id: 3,
        user_id: 4,
        content: 'Deo lien quan'
    },
    {
        id: 4,
        user_id: 1,
        content: 'Ơ thế ạ'
    },

]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id,
// 3. Từ user_id lấy ra user tương ứng

//Fake API

function getComments() {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve(comments)
        },1000);
    });
}

function getUsersByIds(userIDs) {
    return new Promise(function(resolve){
        var result = users.filter(function(user){
            return userIDs.includes(user.id)
        });
        setTimeout(function(){
            resolve(result)
        },1000);
    })
}

getComments()
    .then(function(comments){
        var userIDs = comments.map(function(comment){
            return comment.user_id
        });

        return getUsersByIds(userIDs)
            .then(function(users){
                return {
                    users: users,
                    comments: comments
                };
            })
    })

    .then(function(data) {
        var commentBlock = document.querySelector('#comments-block')

        var html = '';

        console.log(data)

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            });

            console.log(user)
            if(user){
                html += `<li>${user.name} : ${comment.content}</li>`
            }
            
        });

        commentBlock.innerHTML = html;

        // console.log(commentBlock)
    })

