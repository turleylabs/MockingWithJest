import * as listItemsDB from './listItemsDb';

async function setListItem(req, res, next) {
    const {id} = req.params;
    const listItem = await listItemsDB.readById(id);
    if (!listItem) {
        res
            .status(404)
            .json({message: `No list item was found with the id of ${id}`});
        return;
    }
    if (req.user.id === listItem.ownerId) {
        req.listItem = listItem;
        next();
    } else {
        res.status(403).json({
            message: `User with id ${req.user.id} is not authorized to access the list item ${id}`,
        });
    }
}

async function getListItems(req, res) {
    const listItems = await listItemsDB.query({ownerId: req.user.id});
    res.json({listItems: listItems});
}

async function createListItem(req, res) {
    const {
        user: {id: ownerId},
    } = req;
    const {bookId} = req.body;
    if (!bookId) {
        res.status(400).json({message: 'No bookId provided'});
        return;
    }
    const [existingListItem] = await listItemsDB.query({ownerId, bookId});
    if (existingListItem) {
        res.status(400).json({
            message: `User ${ownerId} already has a list item for the book with the ID ${bookId}`,
        });
        return;
    }

    const listItem = await listItemsDB.create({ownerId, bookId});
    res.json({listItem: listItem});
}

export {
    setListItem,
    getListItems,
    createListItem,
};
