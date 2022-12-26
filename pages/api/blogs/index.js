const blogData=[
    {
        title:"I work best when my space is filled with inspiration",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan",
        tags:["Creative","communication"],
        author:["halil toma","caitlin tencate"]
    },
    {
        title:"I work best when my space is filled with inspiration",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan",
        tags:["Creative","communication"],
        author:["halil toma","caitlin tencate"]
    },
    {
        title:"I work best when my space is filled with inspiration",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan",
        tags:["Creative","communication"],
        author:["halil toma","caitlin tencate"]
    },
    {
        title:"I work best when my space is filled with inspiration",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem mi libero accumsan",
        tags:["Creative","communication"],
        author:["halil toma","caitlin tencate"]
    },
   
    
]



export default function handler(req, res) {
   res.status(200).send(blogData)
  }
  