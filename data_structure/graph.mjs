class Graphs {
    constructor() {
        this.node_count=0,
        this.nodeData={}
    };
    insert(node) {
        
        let data=this.nodeData
        
        // Checking if the node exists
        
        if (data[node]) throw "Node Already Exists."
        
        else {

            data[node] = [];
        
        }

        // Returning 0 to show that this command was executed with no issues/warning/errors
        return 0
    };
    connect(node1, node2) {
        
        let data=this.nodeData
        
        // Checking if both of the node exists otherwise throwing errors
        if (!(node1 && node2)) throw "The mentioned node doesn't exists."

        // Connecting the nodes by adding the adjacent data of em in their respective list

        data[node1].push(node2)
        data[node2].push(node1)

        return 0

    };

    remove(node1, node2) {
        
        let data = this.nodeData;

        // Checking if the node exists, otherwise error stuff

        if (!(data[node1] && data[node2])) throw "The mentioned node doesn't exists."

        // Fetching the index of both nodes and then checking if the node are actually connected with each other or not

        const index2 = data[node1].indexOf(node2)
        const index1 = data[node2].indexOf(node1)
        if (index1 === -1 || index2 === -1) throw "The nodes are already disconnected with each other"


        data[node1].pop(index2)
        data[node2].pop(index1)

        return 0
    
    };
    show() {
        console.log(this.nodeData)
    }
};

export default Graphs;