import React, { Component } from 'react'
import Question   from './Question'

const trainingPassage =         {
            "passageName": "Shoveling Snow",
            "passage": "I want a new toy. Mom says toys cost money. How can I get money? I look outside. There is a lot of snow! Mom says I can earn money if I shovel our driveway. I do. It is fun! I do not have enough money for my new toy. I look around. Mrs. Jen has a shovel. Can I shovel her driveway? She says yes! I almost have enough money for my new toy. Mr. Tom has a shovel. Can I shovel his driveway? He says yes! I can get my new toy!",
            "questions": [
                {
                    "question": "Who are the characters?",
                    "choices": [
                        "Child, Mom, Mrs.Jen and Mr.Tom",
                        "Mr.Tom, Father, Child, Mrs.Jen",
                        "Mr.Jason, Father, Child, Mrs.Jen"
                    ],
                    "answer": "Child, Mom, Mrs.Jen and Mr.Tom"
                },
                {
                    "question": "Where is the setting?",
                    "choices": [
                        "At the playground",
                        "The driveways of mom, Mrs.Jen and Mr.Tom",
                        "The house of mom, Mrs.Jen and Mr.Tom"
                    ],
                    "answer": "The driveways of mom, Mrs.Jen and Mr.Tom"
                },
                {
                    "question": "What is the problem?",
                    "choices": [
                        "The child is lazy at his house",
                        "The child has money, but has no toy to buy",
                        "The child has a toy, but has no money to buy the toy"
                    ],
                    "answer": "The child has a toy, but has no money to buy the toy"
                },
                {
                    "question": "How does he solve the problem?",
                    "choices": [
                        "The child shovels his/her mom's, Mrs.Jen, and Mr.Tom's driveway so he/she can play at the playground later",
                        "The child shovels his/her mom's, Mrs.Jen, and Mr.Tom's driveway to earn money",
                        "The child goes to the store to get a toy"
                    ],
                    "answer": "The child shovels his/her mom's, Mrs.Jen, and Mr.Tom's driveway to earn money"
                }
            ]
        }

export default class Training extends Component {
	constructor(props){
		super(props)
		setTimeout(()=>this.props.spk("I like cheese"), 500)
	}

	render(){
		return(
			<div>
			<h1>Training Trial</h1>
			<Question type="select" label="Color" choices={["orange","green"]} />
			</div>
		)
	}
}