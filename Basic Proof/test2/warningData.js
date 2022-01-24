class User {
    constructor(UserName){
        this.UserName = UserName;
    }
    get getUsername(){
        return this.UserName;
    }
    set setUsername(username){
        this.UserName = username;
    }
}

class ChatUser {
    constructor(userName){
        this.username = userName;
        this.warning = 0;
    }
    giveWarning(){
        this.warning +=1;
    }
    get getWarningCount(){
        return this.warning;
    }
    set setUserName(username){
        this.username = username;
    }
}


function main() {

    
    const initialUsername = "Daniel";
    const chatUserObj = new ChatUser(initialUsername);
    
    let numberOfOperations =10;
    while (numberOfOperations-- > 0) {
        const inputs = readLine().trim().split(' ');
        const operation = inputs[0];
        const username = inputs[1];

        switch(operation) {
            case 'GiveWarning':
                chatUserObj.giveWarning();
                break;
            case 'SetName':
                chatUserObj.setUsername(username);
                break;
            default:
                break;
        }
    }
    ws.write(`User ${chatUserObj.getUsername()} has a warning count of ${chatUserObj.getWarningCount()}\n`);
    ws.write(`ChatUser extends User: ${(chatUserObj instanceof User).toString()}`);
    ws.end();
}