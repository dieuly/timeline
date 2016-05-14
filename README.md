L2P Timeline
=====================================

A timeline-based website that can be reused with different sources of data.
Live demo at http://46.101.196.201/ (until 1st of September).
---

### Use & Build

The source files come already with the an already built web site. To open it, open file ```index.html```. In order to create another website with different timeline data, the project must be built again.

1. Install: git, nodejs, node-gyp, gulp all globally (troubleshooting available below)
2. If on Windows, Git Bash is needed
3. Clone the source files by download and extract the repository zip file or use ```git clone https://github.com/dieuly/timeline```
4. In the root folder, there is an excel file named ```template.xlsx```, populate your data as you see fit. Data must be organized as already shown in the original template.
5. Use Bash (Windows, Linux), or Terminal (MacOS), go the the project directory. Run "npm install", which will fetch necessary files for the project. A network connection is required.
6. Type command ```gulp``` to build the project. When build is finish, the project can be opened from ```index.html```.

## Development

Soucre files for development are in ```src``` folder. Distribution files are in ```dist``` folder. Gulp automation tasks are configured in ```gulpfile.js```. ```gulp watch``` can be used for tracking the changes in source files and automatically building the project.

### Troubleshooting

- Cannot use command ```node``` nor ```npm``` in Debian based system: http://stackoverflow.com/questions/21168141/cannot-install-packages-using-node-package-manager-in-ubuntu
- Multiple package build failures when running ```npm install```. Check if ```node-gyp``` is properly installed and built: https://github.com/nodejs/node-gyp
- ```gulp``` and ```gulp watch``` commands fail with ```Error: watch null EPERM```. Try running the command one more time. 
