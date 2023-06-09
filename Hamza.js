useEffect(() => {
    
    const getLang = async()=>{
      const docRef = doc(db, "list", "0");
      const docSnap = await getDoc(docRef);

      docSnap.data().name === "Flatlist" ? setList(true) : setList(false)
    }

    getLang();

  } , [list])


  {list && <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />}

      {!list && <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />}