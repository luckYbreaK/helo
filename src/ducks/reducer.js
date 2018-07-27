const initialState = {
    username: "",
    profile: "",
    userId: 0
}

const UPDATE_USER_INFO = "UPDATE_USER_INFO"

export function updateUserInfo(userObj) {
    return {
        type: UPDATE_USER_INFO,
        payload: {
            userId: userObj.id,
            username: userObj.username,
            profile: userObj.profile_pic
        }
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_INFO:
            return Object.assign({}, state, {
                username: action.payload.username,
                profile: action.payload.profile,
                userId: action.payload.userId
            });
        default:
            return state;
    }
}