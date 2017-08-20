from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# code for postgres database later on
#engine = create_engine("postgresql://postgres:kappa123@localhost/TestBread", convert_unicode=True)

engine = create_engine("sqlite:///TestBread.db",  convert_unicode=True)
db_session = scoped_session(sessionmaker(autocommit=False,
                                         autoflush=False,
                                         bind=engine))
Base = declarative_base()
Base.query = db_session.query_property()


def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.
    import models
    Base.metadata.create_all(bind=engine)