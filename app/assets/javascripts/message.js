$(function(){
  function buildHTML(message){
    if (message.image) {
      let html =
        `<div class="main-messages-body">
          <div class="name-date">
            <div class="main-username">
              ${message.user_name}
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
          ${message.user_name}
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

    let reloadMessages = function() {
      let last_message_id = $('.MessageBox:last').data("message-id") || 0;
      $.ajax({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id}
      })
      .done(function(messages) {
        console.log('success');
      })
      .fail(function() {
        alert('error');
      });
    };
  
  });
  setInterval(reloadMessages, 7000);
});
