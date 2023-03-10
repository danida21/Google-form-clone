import React, {useState} from 'react'
import { CropOriginal, CheckBox,ShortText, Subject, MoreVert, Delete, FilterNone,AddCircleOutline, OndemandVideo, TextFields, FileCopy, Close, DragIndicator } from '@mui/icons-material'
import { Box, Select, Switch, IconButton, Accordion, AccordionSummary, AccordionDetails, Button, Radio, FormControlLabel, Typography, MenuItem, keyframes } from '@mui/material'
import { FcRightUp } from 'react-icons/fc'
import { BsTrash,BsFileText } from 'react-icons/bs'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import './QuestionForm.css'



const QuestionForm = () => {
    const [questions, setQuestions] = useState(
        [
            {
                questionText: 'Which One is the capital city of Ethiopia?',
                questionType: "radio",
                options: [
                    { optionText: "Mekelle" },
                    { optionText: "Hawassa" },
                    { optionText: "Addis Ababa" },
                    { optionText: "Diredawa" }
                ],
                answer: false,
                answerKey: '',
                points: 0,
                open: true,
                required: false

            }
        ]
    )

    function ChangeQuestion(text, i) {
        var newQuestion = [...questions]
        newQuestion[i].questionText = text;
        setQuestions(newQuestion)
        console.log(newQuestion)
    }

    function addQuestionType(i, type) {
        let qs = [...questions]
        console.log(type)
        qs[i].questionType = type;

        setQuestions(qs)
    }

    function changeOptionValue(text, i, j) {
        var optionsQuestion = [...questions]
        optionsQuestion[i].options[j].optionText = text
        setQuestions(optionsQuestion)
        console.log(optionsQuestion)
    }
    
    function removeOption(i, j) {
        var RemoveOptionQuestion = [...questions]

        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1)
            setQuestions(RemoveOptionQuestion)
            console.log(i + "__" + j)
        }
    }

    function addOption(i) {
        var optionsOfQuestion = [...questions]
        if (optionsOfQuestion[i].options.length < 5) {
            optionsOfQuestion[i].options.push({ optionText: "Option" + (optionsOfQuestion[i].options.length + 1) })
            
        } else {
            console.log('max 5 options')
        }
    }

    function copyQusetion(i) {
        expandCloseAll()
        let qs = [...questions]
        var newQuestion = { ...qs[i] }
        setQuestions([...questions, newQuestion])
    }

    function deleteQuestion(i) {
        let qs = [...questions]
        if (questions.length > 1) {
            qs.splice(i, 1)
        }
        setQuestions(qs)
    }

    function requiredQuestion(i) {
        var reqQuestion = [...questions]
        
        reqQuestion[i].required = !reqQuestion[i].required
        
        console.log(reqQuestion[i].required + " " + i)
        setQuestions(reqQuestion)
    }

    function addMoreQuestionField() {
        expandCloseAll()
        setQuestions([...questions, {questionText:"Question", questionType:"radio", options:[{optionText:"Option 1"}], open: true, required:false}])
    }

  

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }
        var itemgg = [...questions]
        const itemF = reorder(
            itemgg,
            result.source.index,
            result.destination.index
        )
        setQuestions(itemF)
    }

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }

    function expandCloseAll() {
        let qs = [...questions]
        for (let j = 0; j < qs.length; j++){
            qs[j].open = false
        }
        setQuestions(qs)
    }

    function handleExpand(i) {
        let qs = [...questions]

        for (let j = 0; j < qs.length; j++){
            if (i === j) {
                qs[i].open = true;
            } else {
                qs[i].open = false;
            }
        }
        setQuestions(qs)
    }


     function setOptionAnswer(ans, qno){
        var Questions = [...questions]
        Questions[qno].answerKey = ans;

        setQuestions(Questions)
        console.log(qno + " "+ans)
    }

   function setOpttionPoints  (points, qno)  {
        var Questions = [...questions]
        Questions[qno].points = points

        setQuestions(Questions)
        console.log(qno+" "+points)
    }

   function doneAnswer(i) {
        var answerOfQuestion = [...questions]

        answerOfQuestion[i].answer = !answerOfQuestion[i].answer
        setQuestions(answerOfQuestion)
    }


    function addAnswer(i) {
        var answerOfQuestion = [...questions]
        answerOfQuestion[i].answer = !answerOfQuestion[i].answer
        setQuestions(answerOfQuestion)
    }

   

    function questionUI() {
        return questions.map((ques, i) => (
            <Draggable key={i} draggableId={i + 'id'} index={i}>
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <div>
                            <div style={{ marginBottom: "0[x" }}>
                                <div style={{ width: '100%', marginBottom: '0px' }}>
                                    <DragIndicator style={{transform:'rotate(-90deg', color:'#DAE0E2', position: 'relative', left: '300px', fontSize: 'medium'}} />
                                </div>
                                <Box>
                                        <Accordion onChange={() => {handleExpand(i)}} expanded={questions[i].open} className={questions[i].open ? 'add_border' : ''}>
                                            <AccordionSummary
                                                    aria-controls='panel1a-content'
                                                    id='panel1a-header'
                                                    elevation={1} style={{ width: '100%' }}
                                                >
                                                    {!questions[i].open ? (
                                                        <div className='saved_questions'>
                                                        <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '0.1px', lineHeight: '24px', paddingBottom: '8px' }}>
                                                            {i + 1}. {questions[i].questionText}
                                                        </Typography>
                                                        {ques.options.map((op, j) => (
                                                            <div key={j} >
                                                                <div style={{ display: 'flex' }}>
                                                                    <FormControlLabel style={{ marginLeft: '5px', marginBottom: '5px' }} disabled control={<input type={ques.questionType}
                                                                        color='primary' style={{ marginRight: '3px' }} required={ques.type} />} label={
                                                                            <Typography style={{
                                                                                fontFamily: 'Roboto, Arial, sans-serif',
                                                                                fontSize: '13px',
                                                                                fontWeight: '400',
                                                                                letterSpacing: '0.2px',
                                                                                lineHeight: '20px',
                                                                                color: '#202124'
                                                                            }}>
                                                                                {ques.options[j].optionText}
                                                                            </Typography>
                                                                        } />                                                                                                                          
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    ): ""}
                                                </AccordionSummary>


                                        {questions[i].open ? (
                                            <div className='question_boxes'>
                                                {!questions[i].answer ? (
                                                   <AccordionDetails className='add_question'>
                                                   <div className="add_question_top">
                                                       <input type="text" className="question" placeholder='question' value={ques.questionText} onChange={(e) => {ChangeQuestion(e.target.value, i)}} />
                                                       <CropOriginal style={{ color: '#5f6368' }} />
                                                       <Select className='select' style={{ color: '#5f6368', fontSize: '13px' }}>
                                                           <MenuItem id='text' value='text' onClick = {() => {addQuestionType(i, 'text')}} ><Subject style={{marginRight:'10px'}}  /> Paragraph</MenuItem>
                                                           <MenuItem id='checkbox' value='Checkbox' onClick = {() => {addQuestionType(i, 'checkbox')}} ><CheckBox style={{marginRight:'10px', color:'#70757a'}} checked /> Checkboxes</MenuItem>
                                                           <MenuItem id='radio' value='Radio' onClick = {() => {addQuestionType(i, 'radio')}}><Radio style={{marginRight:'10px', color:'#70757a'}}  /> Multiple Choice</MenuItem>
                                                       </Select>
                                                   </div>
   
   
                                                   {ques.options.map((op, j) => (
                                                       <div className="add_question_body">
                                                           {
                                                               (ques.questionType !== 'text') ?
                                                                   <input type={ques.questionType} style={{ marginRight: '10px' }} /> :
                                                                   <ShortText style={{marginRight:'10px'}} />
                                                           }
                                                           <div>
                                                               <input type="text" className="text_input" placeholder='option' value={ques.options[j].optionText} onChange={ (e) => {changeOptionValue(e.target.value, i, j)} } />
                                                           </div>
                                                           <div style={{display:'flex', alignItems:'center'}}>
                                                               <CropOriginal style={{ color: '#5f6368' }} />
                                                               <IconButton aria-label='delete'>
                                                                   <Close onClick={() => {removeOption(i,j)}} />
                                                               </IconButton>
                                                           </div>
                                                       </div>
                                                   ))}
   
   
                                                   {ques.options.length < 5 ? (
                                                       <div className="add_question_body">
                                                           <FormControlLabel disabled control={
                                                               (ques.questionType!=='text') ?
                                                                   <input type={ques.questionType} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }} style={{ marginLeft: '10px', marginRight: '10px' }} disabled /> :
                                                                   <ShortText style={{ marginRight:'10px' }} />
                                                           } label={
                                                               <div>
                                                                   <input type="text" className="text_input" style={{ fontSize: '13px', width:'60px' }} placeholder='Add other' />
                                                                   <Button size='small' onClick={ () => {addOption(i)} } style={{textTransform: 'none', color:'#4285f4', fontSize: '13px', fontWeight:'600'}}>Add Option</Button>
                                                               </div> 
                                                           }/>
                                                               
                                                           
                                                       
                                                       </div>
                                                   ) : ""}
                                                   
   
                                                   <div className="add_footer" >
                                                       <div className="add_question_bottom_left">
                                                           <Button onClick={() => {addAnswer(i)}} size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                                               <FcRightUp style={{border: '2px solid #4285f4', padding: '2px', marginRight: '8px'}} /> Answer Key
                                                           </Button>
                                                       </div>
                                                       <div className="add_question_bottom">
                                                           <IconButton aria-label='Copy'>
                                                               <FilterNone onClick={() => {copyQusetion(i)}} />
                                                           </IconButton>
                                                           <IconButton aria-label='delete'>
                                                               <BsTrash onClick={() => {deleteQuestion(i)}} />
                                                           </IconButton>
                                                           <IconButton><span style={{ color: '#5f6368', fontSize: '13px' }}>Required </span> <Switch  name='checkbox' color='primary' checked onClick={() => {requiredQuestion(i)}} /></IconButton>
                                                           <IconButton>
                                                               
                                                               
                                                   
                                                           </IconButton>
                                                           <IconButton>
                                                               <MoreVert />
                                                           </IconButton>
                                                       </div>
                                                   </div>
                                               </AccordionDetails>
                                                ) : (
                                                        <AccordionDetails className='add_question'>
                                                            <div className="top_header">
                                                                Choose Correct Answer
                                                            </div>
                                                            <div>
                                                                <div className="add_question_top">
                                                                    <input type="text" className="question" placeholder='Question' value={ques.questionText} disabled />
                                                                    <input type="text" className="points" min='0' step='1' placeholder='0' onChange={(e) => setOpttionPoints(e.target.value, i)} />
                                                                </div>
                                                                {ques.options.map((op, j) => (
                                                                    <div className="add_question_body" key={j} style={{ marginLeft: "8px", marginBottom: "10px", marginTop: "5px" }}>
                                                                        <div key={j}>
                                                                            <div className="" style={{ display: 'flex' }}>
                                                                                <div className="form-check">
                                                                                    <label style={{ fontSize: '13px' }} onClick={() => {setOptionAnswer(ques.options[i].optionText, i)}} >
                                                                                        {(ques.questionType = 'text') ?
                                                                                            <input type={ques.questionText} name={ques.questionType} value='option3' className='form-check-input' required={ques.required} style={{ marginRight: "10px", marginBottom: "10px", marginTop: '5px' }} /> :
                                                                                            <ShortText style={{ marginRight: '10px' }} />} 
                                                                                        {ques.options[j].optionText}
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                <div className="add_question_body">
                                                                    <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }}>
                                                                        <BsFileText style={{ fontSize: '20px', marginRight: '8px' }} />
                                                                        Add Answer Feedback
                                                                    </Button>
                                                                </div>
                                                                <div className="add_question_bottom">
                                                                    <Button variant='outline' color='primary' style={{ textTransform: 'none', color: '#4285f4', fontSize: '12px', marginTop: "12px", fontWeight: "600" }}
                                                                    onClick={() => {doneAnswer(i)}}>Done</Button>
                                                                </div>
                                                            </div>
                                                        </AccordionDetails>
                                                )}
                                            
                                            <div className="question_edit">
                                                <AddCircleOutline onClick={addMoreQuestionField} className='edit' />
                                                <OndemandVideo className='edit' />
                                                <CropOriginal className='edit' />
                                                <TextFields className='edit'/>
                                            </div>
                                        </div>
                                            ): "" } 
                                                
                                        </Accordion>
                                </Box>
                            </div>
                        </div>
                        </div>
                )}
           </Draggable>
        ))
    }
    


  return (
      <Box >
          <Box sx={{backgroundColor:"#f4f4f9", height:"100%", paddingBottom:"30px"}}>
              <br />
              <Box sx={{ margin: "auto", width: "50%" }}>
                  <Box>
                      <Box  className='question_top'>
                          <input type="text" className='question_form_top_name' style={{color: 'black'}} placeholder='Untitled document'/>
                          <input type="text" className='question_form_top_desc' style={{color: 'black'}} placeholder='Form description'/>


                      </Box>
                  </Box>

                  <DragDropContext onDragEnd={onDragEnd}>
                      <Droppable droppableID="droppable">
                          {(provided, snapshot) => (
                              <div {...provided.droppableProps} ref={provided.innerRef}>
                                  {questionUI()}
                                  {provided.placeholder}
                              </div>
                          )}
                      </Droppable>
                  </DragDropContext>
                  
                  
              </Box>

          </Box>
    </Box>
  )
}

export default QuestionForm