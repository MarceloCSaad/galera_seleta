pipeline {

    agent any
    
    parameters {
        booleanParam(name: 'executeTests', defaultValue: true, description: 'Unity and integration tests execution')
    }

    stages {
       
        stage("clone-repo") {
            
            steps {
                git url: "https://github.com/MarceloCSaad/galera_seleta.git"
            }
        }

        stage("build") {
    
            steps {
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                echo "working dir = ${env.WORKSPACE}"
                echo 'new test'
                sh "cd ${env.WORKSPACE}"
                sh 'ls -la'
            
                // nodejs('Node-15.7.0') {
                //     sh 'npm install'
                //     sh 'npm run build'
                // }
            }
        }

        stage("test") {
            when {
                expression {
                    params.executeTests == true
                }
            }
            steps {
                echo 'testing the application!'
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

    // post {
    //     always {
    //         emailext body: 'JENKINS HAVE RUN A JOB =)', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
    //     }
    // }
}