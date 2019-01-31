<template>
    <div class="login-box">
        <div class="login-logo">
            <a href="#"><b>Admin</b>LTE</a>
        </div>
        <!-- /.login-logo -->
        <div class="login-box-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <div class="alert alert-danger" v-if="has_error">
                <p>Error, user name or password nor match</p>
            </div>
            <form autocomplete="off" @submit.prevent="login" method="post">
                <div class="form-group has-feedback">
                    <input type="email" id="email" class="form-control" v-model="email" placeholder="Email" required>
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                </div>
                <div class="form-group has-feedback">
                    <input type="password" id="password" class="form-control" v-model="password" required placeholder="Password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox icheck">
                            <label>
                                <input type="checkbox"> Remember Me
                            </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>
            <div class="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
                <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
            </div>
            <!-- /.social-auth-links -->
            <a href="#">I forgot my password</a><br>
            <a href="#" class="text-center">Register a new membership</a>
        </div>
        <!-- /.login-box-body -->
    </div>
</template>
<script>
import jquery from './dist/jquery/jquery.min.js';
import bootstrap from './dist/bootstrap/bootstrap.min.js';

export default {
    data() {
        return {
            email: null,
            password: null,
            has_error: false
        }
    },

    mounted() {
        //
    },

    methods: {
        login() {
            // get the redirect object
            var redirect = this.$auth.redirect()
            var app = this
            this.$auth.login({
                params: {
                    email: app.email,
                    password: app.password
                },
                success: function() {
                    // handle redirection
                    const redirectTo = redirect ? redirect.from.name : this.$auth.user().role === 2 ? 'admin.dashboard' : 'dashboard'
                    this.$router.push({ name: redirectTo })
                },
                error: function() {
                    app.has_error = true
                },
                rememberMe: true,
                fetchUser: true
            })
        }
    }
}

</script>

<style lang="scss" scoped>
</style>