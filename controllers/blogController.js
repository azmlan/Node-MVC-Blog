
const Blog = require('../models/blog');


// Blogs ...
const blog_index= (req,res)=>{
        Blog.find().sort({createdAt : -1})
        .then((result)=>{
            res.render('blogs/index',{title:'All Blogs !',blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        })
}
// Create POST
const blog_create_post =(req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
      res.redirect('/blogs');
    }).catch((err)=>{
      console.log(err);
    })
  }
  // Create GET
  const blog_create_get =(req,res)=>{
    res.render('blogs/create');
};
const blog_get_id =(req,res)=>{
    const id = req.params.routeparameter;
    Blog.findById(id)
    .then((result)=>{
      res.render('blogs/details',{blog:result,title:'Blog Details'});
    }).catch((err)=>{
  res.render('404',{title:'عذرا الصفحة غير موجودة '});
    })
  }

  const blog_delete_post= (req,res)=>{
    const id = req.params.routeparameter;
    Blog.findByIdAndDelete(id)
    .then((result)=>{
      res.json({redirect:'/blogs'})
    }).catch((err)=>{
      console.log(err);
    })
  }
module.exports={
    blog_index,
    blog_create_post,
    blog_create_get,
    blog_get_id,
    blog_delete_post
    
}