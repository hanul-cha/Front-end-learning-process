//callback Hell Example
class UserStorage {
    //사용자를 로그인 하는 api
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if(
                (id === 'hanul' && password === "1234") || 
                (id === 'hansol' && password === "1234")
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

    //사용자의 데이터를 받아서 역할(admin, guest)을 서버에 다시 요청해서 받아오는 api
    //원래는 사용자가 로그인하면 로그인 하는 사용자 정보안에 관련정보를 받아오는게 맞음(예제라 가정)
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if(user === 'hanul') {
                onSuccess({name: 'hanul', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        },1000);
    }

}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);