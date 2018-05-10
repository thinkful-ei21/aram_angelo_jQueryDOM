
function submit() {
    $('#add-button').on('click', function(event) {
        event.preventDefault();
        const item = $('.js-shopping-list-entry').val();
        if (item.length) addItem(item);
        
    })
}

function main() {
    submit();
    toggler();
    handleDelete();
}

function toggler() {
    $('.shopping-item-toggle').click(function () {
        console.log(this);
        $(this).parent('div').parent('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
}

function handleDelete() {
    $('.shopping-item-delete').on('click', function () {
        $(this).closest('li').remove();
    })
}

function addItem(item) {
    $('ul').append(`
    <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
    `);
}


$(main)