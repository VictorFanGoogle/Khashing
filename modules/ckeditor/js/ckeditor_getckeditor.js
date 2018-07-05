class ckeditor_getckeditor extends ActionHandler{
	constructor(position_id,ckeditor_id,data){
		super();
		this.php=false;
		this.position_id=position_id;
		
	}
	showResult(){
		var html=`
					<p></p>
						<textarea name="content" id="`+this.ckeditor_id+`">This is some sample content.</textarea>
					
		`;
		$(this.position_id).html(html);
		ClassicEditor
            .create(document.querySelector("#"+this.ckeditor_id))
			.then( editor => {
				console.log( editor );
			} )
			.catch( error => {
				console.error( error );
			} );
	}

}