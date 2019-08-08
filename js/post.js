var like =0;
var commentArray = [];

function editPost()
{
	var titleName = document.getElementById('blogTitleNew');
	var blogBody = document.getElementById('blogBody');
	var action = document.getElementById('editButton').innerText;
  	var editButton = document.getElementById('editButton');

  	if (action === "Edit ")
  	{
  		titleName.contentEditable = true;
  		blogBody.contentEditable = true;
  		titleName.style.border = '1px solid #ee1461';
  		blogBody.style.border = '1px solid grey';
  		editButton.innerHTML = 'Save <i class="fa fa-save"></i>';
  	}
  	if (action === "Save ")
  	{
  		titleName.contentEditable = false;
  		blogBody.contentEditable = false;
  		titleName.style.border = 'none';
  		blogBody.style.border = 'none';
  		editButton.innerHTML = 'Edit <i class="fa fa-edit"></i>';
  	}

}

function postLiked()
{
	var likeButton = document.getElementById('likeButton');
	var likeText = document.getElementById('likeText');
	likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
	like = like+1;
	if(like === 1)
	{
		likeText.innerText = like + " person likes this!";
	}
  	if (like > 1)
  	{
    	likeText.innerText = like + " people have liked this!";
  	}
}

function addComment()
{
	var comment = document.getElementById('commentArea');
	var commentBlocks = document.getElementById('commentBlocks');
	commentBlocks.innerHTML = '';
	commentArray.push(comment.value);
	comment.value ='';
	for ( var i = commentArray.length-1; i>=0; i--)
	{
		var element = document.createElement('p');
		element.setAttribute('class', 'commentBlock');
		element.innerText = commentArray[i];
		document.getElementById('commentBlocks').append(element);
	}

}