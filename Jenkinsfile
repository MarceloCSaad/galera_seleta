pipeline {

    agent any
    
    parameters {
        booleanParam(name: 'executeTests', defaultValue: true, description: 'Unity and integration tests execution')
    }

    stages {
       
        stage("build") {
    
            steps {
                echo 'building the application...'
                nodejs('Node-15.7.0')
            }
        }

        stage("test") {
            when {
                expression {
                    params.executeTests == true
                }
            }
            steps {
                echo 'testing the application...'
            }
        }

        stage("deploy") {
            when {
                expression {
                    env.BRANCH_NAME == 'master'
                }
            }
            steps {
                echo "deploying application...  "
            }
        }
    }

    post {
        always {
            emailext body: 'A Test Email', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }
}