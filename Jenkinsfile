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
                sh "cd ${env.WORKSPACE}"
                nodejs('Node-15.7.0') {
                    sh 'npm install'
                    sh 'npm run build'
                }
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
                echo "Deploying application job ${env.BUILD_ID} in host!"
                sh "cat ${env.WORKSPACE}/build/index.html"
            }
        }
    }

    // post {
    //     always {
    //         emailext body: 'JENKINS HAVE RUN A JOB =)', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
    //     }
    // }
}