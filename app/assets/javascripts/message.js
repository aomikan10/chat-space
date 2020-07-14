$(function(){
  function buildHTML(message){
    if (message.image) {
      let html =
        `<div class="main-messages-body">
          <div class="name-date">
            <div class="main-username">
              ${message.user.name}
            </div>
            <div class="main-date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="main-messages-body">
      <div class="name-date">
        <div class="main-username">
          ${message.user.name}
        </div>
        <div class="main-date">
          ${message.created_at}
        </div>
      </div>
      <div class="main-message">
        <p class="Message__content">
          ${message.content}
        </p>
      </div>
    </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $('.Form-btn').removeAttr('data-disable-with');
    var fd = new FormData($this.get(0));

    $.ajax({
      url: url,
      type: "POST",  
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.MessageField').append(html);
      $('.MessageField').animate({ scrollTop: $('.MessageField')[0].scrollHeight});     
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});