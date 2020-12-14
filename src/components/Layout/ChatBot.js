import * as React from 'react';

import { Chat } from '@progress/kendo-react-conversational-ui';



class ChatBot extends React.Component {
    constructor(props) {
        super(props);
        this.user = {
            id: 1,
            avatarUrl: ""
        };
        this.bot = { id: 0 };
        this.state = {
            messages: [
                {
                    author: this.bot, 
                    suggestedActions: [
                        {
                            type: 'reply',
                            value: 'Oh, really?'
                        }, {
                            type: 'reply',
                            value: 'Thanks, but this is boring.'
                        }
                    ],
                    timestamp: new Date(),
                    text: "Hello, this is a demo bot. Please add your details for your purchased product."
                }
            ]
        };
    }
    

    addNewMessage = (event) => {
        let botResponce = Object.assign({}, event.message);
        botResponce.text = this.countReplayLength(event.message.text);
        botResponce.author = this.bot;
        this.setState((prevState) => ({
            messages: [
                ...prevState.messages,
                event.message
            ]
        }));
        setTimeout(() => {
            this.setState(prevState => ({
                messages: [
                    ...prevState.messages,
                    botResponce
                ]
            }));
        }, 1000);
    };

    countReplayLength = (question) => {
        let length = question.length;
        let answer = "That can definitely be done! We will let you know when it is finished.";
        return answer;
    }

    render() {
        return (
            <div className= "chatBot">
                <Chat user={this.user}
                    messages={this.state.messages}
                    onMessageSend={this.addNewMessage}
                    placeholder={"Type a message..."}
                    width={'100%'}>
                
                </Chat>
            </div>
        );
    }
}
export default ChatBot;