
$("#submit-comment-form").click(function () {
    const author = $('input#author-input').val()
    const text = $('input#comment-input').val()
    $("#comments").append(`<div class="comment">
            <div class="comment-icon">
                <iconify-icon icon="iconoir:profile-circled" width="40"></iconify-icon>
            </div>
            <div class="comment-content">
                <div class="comment-author">${author}</div>
                <div class=comment-controls>
                    <div class="edit-comment-button button">Edit</div>
                    <div class="delete-comment-button button">Delete</div>
                </div>
                <div class="comment-text">${text}</div>
                <div class="comment-edit-form">
                </div>
            </div>
        </div>`)

    $('input#author-input').val("")
    $('input#comment-input').val("")
})

$("#comments").on('click', '.edit-comment-button', function () {
    const parent = $(this).closest(".comment").children(".comment-content")
    const comment = parent.children(".comment-text")[0].innerText
    parent.children('.comment-edit-form').append(`
        <input value="${comment}" class="edit-input">
        <div class="button edit-submit">Submit</div>
    `)
})

$("#comments").on('click', '.edit-submit', function () {
    const parent = $(this).closest(".comment").children(".comment-content")
    const updatedComment = parent.children('.comment-edit-form').children(".edit-input")[0].value
    parent.children(".comment-text")[0].innerText = updatedComment
    parent.children('.comment-edit-form')[0].innerText = ""
})

$("#comments").on('click', '.delete-comment-button', function () {
    $(this).closest('.comment').remove()
})