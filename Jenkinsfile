pipeline {

    agent any
 
    stages {
       
        stage("build") {
    
            steps {
                echo 'building the application...'
            }
        }

        stage("test") {
        
            steps {
                echo 'testing the application...'
            }
        }

        stage("deploy") {

            steps {
                echo "deploying version ${params.VERSION}"
            }
        }
    }

    // post {
    //     // execute some logic AFTER all stages
    //     always {
    //         // it will execute ALWAYS, even if the build fails (ex: sending an email)
    //     }
    
    //     success {
    //         // it will execute on SUCCESS
    //     }

    //     failure {
    //         // it will execute on FAILURE
    //     }
    // }
}