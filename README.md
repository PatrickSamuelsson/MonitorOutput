# MonitorOutput

To share Monitor output with others:

1. Create a fork by clicking fork at the top right
2. Clone your fork (USER is your Github username):
   ```
   mkdir $HOME/git/github/USER
   cd $HOME/git/github/USER
   git clone git@github.com:USER/MonitorOutput.git
   ```
3. For an experiment EXPNAME put the untarred files in a subdirectory `exp/EXPNAME` 
   
4. Commit your changes 
   ```
   git add .
   git commit -m"Add EXPNAME" 
   ```
5. Push changes to your fork
   ```
   git push 
   ```

Github will start a webserver. GUI will be available at `USER.github.io/MonitorOutput/exp/EXPNAME/`

See [here](https://roelstappers.github.io/MonitorOutput/exp/iOBS_new_cy43_01_05aug2019_3hfc_export/) for an example from [this](https://github.com/roelstappers/MonitorOutput) fork

