let lecture = 10;
let section = 3;
let title = 'js';


const course = {

    lecture: 10,
    section :3,
    title : 'js',
    notes : {
        introduction : " welcome is js"

    },

    enrol(){

    }
}

function  Course(title){
    this.title = title,
    this.enroll = function(){
        console.log('you are sucessfully enrolled');
    }

    }
const course = new Course ('javascript');
delete course.title;

course.enroll()
const course_2 = new Course_1 (' js');
course 
  3
