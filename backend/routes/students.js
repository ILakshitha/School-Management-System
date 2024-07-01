const router = require("express").Router;
const Student = require("../models/student");
let student = require("../models/student");

//ADD CRUD

router.route("/add").post((req,res)=>{
const name= req.body.name;
const age= Number(req.body.age);
const gender = req.body.gender;

const newstudent = new Student({
    neme,
    age,
    gender
}); 

newstudent.save().then(()=>{

    res.json("Student Added!!!")
}).catch((err)=>{
    console.log(err);
})

})

//display CRUD

router.route("/").get((req,res)=>{
    student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const {name,age,grnder}= req.body;

    const updatestudent ={
        name,
        age,
        gender
    }

    const update =await student.findByIdAndUpdate(userId,updatestudent).then(()=>{
        res.status(200).send({status: "User updated", user:update});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error WIth Updating data"})
    })
   

})

// Delete CRUD
router.route("/delete:id").delete(async(req,res)=>{
    let userId= req.params.id;

    await Student.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.massage);
        res.status(500).send({status: "Error WIth Delete data",err: err.massage})
    })
})

//one user get detaails

module.exports = router;