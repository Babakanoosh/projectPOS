https://mlab.com

Database Users:

    read and write
    user: admin
    pass: admin
    
    read only
    user: read
    pass: read



Import collection
    mongoimport -h ds135537.mlab.com:35537 -d posdb -c <collection> -u <user> -p <password> --file <input file>
Export collection
    mongoexport -h ds135537.mlab.com:35537 -d posdb -c <collection> -u <user> -p <password> -o <output file>
    
    
    
To connect using the mongo shell:
    mongo ds135537.mlab.com:35537/posdb -u <dbuser> -p <dbpassword>
To connect using a driver via the standard MongoDB URI (what's this?):
    mongodb://<dbuser>:<dbpassword>@ds135537.mlab.com:35537/posdb