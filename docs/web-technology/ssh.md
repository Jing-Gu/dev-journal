# System administration and networking

## SSH
### What is SSH
SSH, or **secure shell**, provides us a way to securely connect from one system to another over the network or across the internet. It's commonly used to access the **remote system**, which might be a server running in a data center or might be just a computer under your desk.

A **shell** is a text environment where we can type commands for the system to run and then see the output of those programs. We often use a shell (local shell) in a terminal app to interact with the computer that we're using. However, to use a shell on a remote system, one that isn't the one we have right in front of us, we use **Secure Shell** or SSH.

A **secure shell** allows us to make a e connection across the network from our local system to a remote system to use a shell that runs on that remote system instead of on our local system.

In many cases, the shell is called **Bash**. It's common to think of SSH and command line tasks as one thing. But they're really two separate ideas. SSH is a protocol that primarily allows us to access the remote shell, but it is not a shell itself.

### SSH server
To make a SSH connection, we need a client and a server. An SSH client comes preinstalled on most OSs, or can be installed through the openssh-client package. OpenSSH server is already installed and enabled on many server-oriented Linux distributions but we can install it on the Linux system using the system's package management software.

An SSH server is a program running on a remote machine that listens for incoming SSH connections. When a client wants to establish a secure connection to the server, it initiates an SSH session by connecting to the SSH server running on the remote machine.

The SSH server then authenticates the client, typically using a username and password or cryptographic keys. Once authenticated, the server grants access to the client, allowing them to execute commands, transfer files, or perform other tasks securely on the remote system.

### SFTP
SSH servers support a protocol called SFTP (SSH File Transfer Protocol). This is a combination of the old and insecure FTP (file transfer protocol) wrapped up in the security provided by an SSH connection. FTP has been popular for long time to transfer files between computers. But the classic FTP protocol by itself is notoriously insecure and really shouldn't be used by itself anymore. With OpenSSH, we can use our SSH credentials and the encrypted SSH connection to transfer files without any additional software.

## System management
### Hostname
To view and modify the system hostname and related settings. Various system information including the operating system, kernel version, architecture can be displayed.
```bash
hostnamectl
```
### Connect to a server
Once we have an SSH server and we know the credentials for a user on that server, we can use a local SSH client on our device to connect to the server. To SSH manually through Bash, use the `ssh` command followed by the username and IP address (or hostname) of the remote machine we want to connect to.
```bash
ssh username@remote_ip_or_hostname
```

### Shutdown or reboot the server
The `shutdown` command tells the system to move to its shutdown state, and that triggers any running software to perform its designated shutdown tasks, such as closing files, flushing buffers, to help ensure that data isn't lost or damaged, as it might be if we surprise the system and pull its power cord.
```bash
sudo shutdown now

# reboot the system after shutting down
sudo shutdown -r now
```

### Hardware information
`lshw`, short for list hardware. This gives us a detailed output of the system's entire hardware tree, and it can be useful for troubleshooting and for conducting a survey of a system's hardware. It shows the system, the motherboard, the firmware, the processor, the memory, and each of its memory banks, usbs etc.
```bash
# pipe the output into less, to scroll around more easily
sudo lshw | less
# pipe into a text file or export to html for easy readibility
sudo lshw > hw.txt
sudo lshw -html > hw.html
```

`lsblk` is to list information about block devices, useful for seeing what storage device a system has, how they're partitioned, and whether they're mounted.
```bash
lsblk
```

```bash
# take a look at the details of the processor, the CPU.
lscpu

# cpu core, model
cat /proc/cpuinfo

# memory, swap
free -h

# how much space is available
df -h
```

### Software with APT
On an Ubuntu system, we use the **APT** package manager to find, install and manage software. Use `apt list` and then the name of a package we want to find a software, use `apt search`, along with a term to search for a package. But first, it's a good practice to always make sure that we have the most recent list of software available in the repositories that we're searching within. When we search for a package or ask for information about it, we search a local index which has been downloaded to our system. To get a recent copy of the index of packages from each repository we have available, use `sudo apt update` to update the local package lists.

Once the new list of packages are available, we'll see how many installed packages can be upgraded. Run `sudo apt upgrade` to upgrade.

We can also have the system remove unused packages by running `sudo apt autoremove`. And that's useful to clear out old kernels and other packages that have been marked as no longer being used. Either as a result of upgrades or from removing software.

```bash
# update the package lists from the repositories.
# This ensures that you have the latest information about available packages.
sudo apt update

# upgrade your installed packages to their latest versions
sudo apt upgrade

# clean up unnecessary files and packages to free up disk space
sudo apt autoremove

# Reboot (if necessary):
# In some cases, especially after updating the Linux kernel or
# certain core system components,
# it's recommended to reboot your system to apply the changes effectively
sudo reboot
```