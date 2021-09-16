document.getElementById('contact_form').addEventListener('submit', (event)=>{
    event.preventDefault();
    var form=event.target
    
    var formData=new FormData(form);
    fetch("http://127.0.0.1:5000/", {
        method: 'post',
        body: formData,
    })
    .then((res)=>{
        alert('Message sent');
        event.target.reset()
    });
});

