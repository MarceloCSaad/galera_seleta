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
                echo 'building the application...'
                nodejs('Node-15.7.0') {
                    sh 'cd /var/jenkins_home/workspace/galere-seleta_master'
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