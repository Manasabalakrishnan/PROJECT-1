const router=require('express').Router();const Job=require('../models/Job');const Application=require('../models/Application');
router.get('/',async(req,res)=>{const {search,jobType}=req.query;let q={};if(search)q.$or=[{title:new RegExp(search,'i')},{company:new RegExp(search,'i')}];if(jobType)q.jobType=jobType;res.json(await Job.find(q));});
router.post('/',async(req,res)=>res.json(await Job.create(req.body)));
router.get('/:id',async(req,res)=>res.json(await Job.findById(req.params.id)));
router.put('/:id',async(req,res)=>res.json(await Job.findByIdAndUpdate(req.params.id,req.body,{new:true})));
router.delete('/:id',async(req,res)=>res.json(await Job.findByIdAndDelete(req.params.id)));
router.post('/:id/apply',async(req,res)=>res.json(await Application.create({...req.body,jobId:req.params.id})));
router.get('/:id/applications',async(req,res)=>res.json(await Application.find({jobId:req.params.id})));
module.exports=router;