function mountLogin (onLogin){
    var container = mountContainer(`<section class="loginUser off">
    <form class="login">
        <input type="email" name="email" placeholder="e-mail" required>
        <input type="password" name="password" placeholder="password" required>
        <button>Login</button>
    </form>
</section>`)

    var form = container.querySelector('.login')

    form.onsubmit = function(event) {

        event.preventDefault()

        var inputs = form.querySelectorAll('input')

        var email = inputs[0].value
        var password = inputs[1].value

        try { onLogin (email, password)
        } catch (error) {
            alert(error.message)
        }
    }
    return container
}